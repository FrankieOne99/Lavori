import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h1>Welcome to the NewsPage</h1>
      <ul>
        <Link href="/newspage/first-news">
          <li>First-News</li>
        </Link>
        <Link href="/newspage/second-news">
          <li>Second-News</li>
        </Link>
        <Link href="/newspage/third-news">
          <li>Third-News</li>
        </Link>
      </ul>
    </div>
  );
};

export default NewsPage;
