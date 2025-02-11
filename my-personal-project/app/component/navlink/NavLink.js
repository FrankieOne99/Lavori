import Link from "next/link";
import logoImg from "@/assets/logo.png";

import classes from "./navLink.module.css";
import Image from "next/image";
export default function NavLink() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="This is our logo" />
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
