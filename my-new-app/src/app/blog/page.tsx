import Hero from "@/components/hero";

import scaleImg from "public/scale.jpg";

export default function Blog() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="BomberScaleu"
      title="I am the goat of Football Friends"
    />
  );
}
