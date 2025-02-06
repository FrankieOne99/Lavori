import Link from "next/link";

import classes from "./page.module.css"
import ImageSlideshow from "./components/images/image-slideshow";
export default function Home() {
  return (
   <>
   <header className={classes.header}>
    <div className={classes.slideshow}>
<ImageSlideshow />
    </div>
    <div>
      <div className={classes.hero}>
      <h2>Next Level food for next level</h2>
      <p>Taste and share food from all over the world </p>
      </div>
      <div className={classes.cta}>
        <Link href="/community">Join the community</Link>
        <Link href="/meals">Explore meal</Link>
      </div>
      </div>
   </header>
   <main>
   <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section></main></>
  );
}

{/* <main>
<h1 style={{ color: 'white', textAlign: 'center', margin: '-10px' }}>
  Time to get started!
</h1>
<p><Link href="/community">Community</Link></p>
<p><Link href="/meals">Meals</Link></p>
<p><Link href="/meals/share">Meals</Link></p>
</main> */}