import React, { useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const notifications = [
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ];
  const [articles, set_articles] = useState(notifications);

  const dissapear = () => {
    set_articles([]);
  };

  const bringBack = () => {
    set_articles(notifications);
  };
  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>

      <button className="btn btn-primary" onClick={dissapear}>
        Clear notifications
      </button>

      <button className="btn btn-primary" onClick={bringBack}>
        Bring back articles
      </button>

      {articles.map((article) => (
        <ArticleCard title={article.title} body={article.body} />
      ))}
    </div>
  );
}
