import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return <li key={snippet.id}>{snippet.title}</li>;
  });

  return (
    <>
      <h1>List of Snippet: </h1>
      <div>{renderedSnippets}</div>
    </>
  );
}
