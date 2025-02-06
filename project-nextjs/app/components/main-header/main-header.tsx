 


import Link from "next/link";
import francesco from "./main-header.module.css"
import logoImg from "@/assets/logo.png"
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";


const MainHeader = () => {
    return (
<>
<MainHeaderBackground />
      <header className={francesco.header}>
        <Link className={francesco.logo} href="/">
        <Image src= {logoImg} alt="A plate with some food on it" priority/>
        Next Level Food
        </Link>
        <nav className={francesco.nav}>
            <ul>
                <li>
                <NavLink href="/meals">Browse Meals </NavLink>
                </li>
                <li>
                <NavLink href="/community">Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
      </header>
      </>

    )
}

export default MainHeader; 