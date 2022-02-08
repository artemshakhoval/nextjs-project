import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/some-path">Some Path</Link>
        </li>
        <li>
          <Link href="/news/some-new-path">Some New Path</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
