import AllPost from "@/components/posts/all-post";
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
const PostsPage = () => {
  return <AllPost posts={DUMMY_POSTS} />;
};

export default PostsPage;
