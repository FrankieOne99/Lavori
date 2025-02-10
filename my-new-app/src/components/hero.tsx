import type { StaticImageData } from "next/image";

import Image from "next/image";

import style from "../app/page.module.css";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div className={style.heroContainer}>
      <div className={style.image}>
        <Image src={props.imgData} alt={props.imgAlt} fill />
      </div>
      <div className={style.text}>
        <h1 className={style.title}>{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
