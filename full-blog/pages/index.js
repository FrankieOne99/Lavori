import Hero from "@/components/home/hero";
import FeaturedPost from "@/components/home/featured-post";

const DUMMY_POSTS = [
  {
    title: "myTitle",
    slug: "nextJs",
    excerp: "Nextjs is a react framework",
    image: "getting-started-nextjs.png",
    date: "2025-09-21",
  },
  {
    title: "myTitle",
    slug: "nextJs",
    excerp: "Nextjs is a react framework",
    image: "getting-started-nextjs.png",
    date: "2025-09-21",
  },
  {
    title: "myTitle",
    slug: "nextJs",
    excerp: "Nextjs is a react framework",
    image: "getting-started-nextjs.png",
    date: "2025-09-21",
  },
  {
    title: "myTitle",
    slug: "nextJs",
    excerp: "Nextjs is a react framework",
    image: "getting-started-nextjs.png",
    date: "2025-09-21",
  },
];
const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </div>
  );
};

export default HomePage;
