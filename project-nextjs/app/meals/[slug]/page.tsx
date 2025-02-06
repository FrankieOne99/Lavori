

import Image from "next/image";
import classes from "./page.module.css"; 
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

const GenericMeals = ({params})=> {
    const meal= getMeal(params.slug); 

    if(!meal) {
        notFound(); 
    }

    meal.instructions= meal.instructions.replace(/\n/g, '<br />'); 
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    <p className={classes.creator}>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html:meal.instructions
                }}></p>
            </main>
        </div>
    )
}


export default GenericMeals; 
