import Hero from "@/components/hero";

import performanceImg from "public/performance.jpg";

export default function About() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding"
      title="We serve high perfomance application "
    />
  );
}
