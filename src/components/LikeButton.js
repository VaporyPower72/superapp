import React, { useState, useEffect } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_text = "Like this";
  const [text, set_text] = useState(initial_text); // <- using state!

  const switchedIt = () => {
    if (text === "Like this") {
      set_text("You've liked this. Click to unlike");
    } else {
      set_text(initial_text);
    }
  };
  return (
    <div>
      <p>
        <button className="btn btn-primary" onClick={switchedIt}>
          {text}
        </button>
      </p>
    </div>
  );
}
