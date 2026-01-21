import React from 'react'
import { useState } from "react";

const Content = () => {

    function handleNameChange() {
      const names = ["Master", "Leo", "GOAT", "Jana Nayakan", "TVK"];
      const int = [Math.floor(Math.random() * 5)];
      return names[int];
    }

    function handleClick(name) {
      alert(`Welcome to Vijay's world! ${name}`);
    }
  return (
    <main>
      <p>Vijay's {handleNameChange()}</p>
      <button className="btn" onClick={()=> handleClick('TVK')}> Join </button>
    </main>
  );
}

export default Content;
