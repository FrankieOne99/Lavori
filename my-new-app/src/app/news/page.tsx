import Hero from "@/components/hero";

import relImg from "public/reliability.jpg";

export default function News() {
  return (
    <Hero
      imgData={relImg}
      imgAlt="welding"
      title="Super high reliability hosting"
    />
  );
}
