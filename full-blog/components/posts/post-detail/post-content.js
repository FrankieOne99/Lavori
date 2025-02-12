import ReactMarkdown from "react-markdown";

import classes from "./post-content.module.css";
import PostHeader from "./post-header";
const DUMMY_POSTS = {
  title: "myTitle",
  slug: "nextJs",
  image: "getting-started-nextjs.png",
  content: "# This is a fist post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <>
      <article className={classes.content}>
        <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
        <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
      </article>
    </>
  );
};

export default PostContent;
