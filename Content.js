import React from 'react'
import { useState } from "react";

const Content = () => {
      const [name, setName] = useState("TVK");
      function handleNameChange() {
      const names = ["Master", "Leo", "GOAT", "Jana Nayakan", "TVK"];
      const int = [Math.floor(Math.random() * 5)];
      setName(names[int]);
    } 
    
  return (
    <main>
      <p>Vijay's {name} World!</p>
      <button className="btn" onClick={handleNameChange}> Join </button>
     </main>
  );
}

export default Content;
