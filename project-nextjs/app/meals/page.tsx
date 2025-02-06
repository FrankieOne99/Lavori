

import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import {getMeals} from "@/lib/meals";
import { Suspense } from "react";


async function Meals() {
    const meals = await getMeals(); 

    return  <MealsGrid meals={meals} /> 
}


export default function MealsPage() {
   
    return (
        <div>
    <header className={classes.header}>
        <h1>
            Delicious meals, created {''}
            <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose yout favourite recipe and cook yourself. It is easy and you will love it</p>
        <p className={classes.cta}>
            <Link href="/meals/share">
            Share your favourite recipe</Link>
        </p>
    </header>
    <main className={classes.main}></main>
    <Suspense fallback={<p className={classes.loading}>...fetching meals</p>}>  
        <Meals />
    </Suspense>
         
        </div>
    )
}

