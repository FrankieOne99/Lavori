import Image from "next/image";
import classes from "./post-item.module.css";
import Link from "next/link";

const PostItem = (props) => {
  const { title, image, excerp, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    date: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerp}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
