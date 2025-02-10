import Link from "next/link";
import React from "react";

import style from "../app/page.module.css";
const MainHeader = () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <Link href="/" className={style.homes}>
          Home
        </Link>
        <div className={style.group}>
          <Link href="/about">About us </Link>

          <Link href="/blog">Blog</Link>

          <Link href="/news">News</Link>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
