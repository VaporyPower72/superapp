import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Timeout from "await-timeout";
import axios from "axios";

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

  const [articles, set_articles] = useState();

  const dissapear = () => {
    set_articles([]);
  };

  const bringBack = () => {
    set_articles(notifications);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      await Timeout.set(4000);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      console.log("Got back:", res);
      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>

      <button className="btn btn-primary" onClick={dissapear}>
        Clear notifications
      </button>

      <button className="btn btn-primary" onClick={bringBack}>
        Bring back articles
      </button>

      {!articles ? (
        <h2>Loading...</h2>
      ) : (
        articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            body={article.body}
          />
        ))
      )}
    </div>
  );
}
