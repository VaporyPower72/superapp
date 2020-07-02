import React, { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  const increment = () => {
    console.log("Yes, clicked! current number of likes", numLikes);
    set_numLikes(numLikes + 1);
  };

  const toZero = () => {
    set_numLikes(numLikes - numLikes);
  };

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button className="btn btn-primary" onClick={increment}>
          Like
        </button>
        <button onClick={toZero}>Reset</button>
      </p>
    </div>
  );
}
