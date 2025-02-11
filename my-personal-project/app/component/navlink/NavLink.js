import Link from "next/link";
import logoImg from "@/assets/logo.png";

import classes from "./navLink.module.css";
export default function NavLink() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="This is our logo" />
        My Personal Project
      </Link>
      <nav className={classes.nav}>
        <ul>
          <Link href="/about">
            <li>About Us</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/newspage">
            <li>News</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
