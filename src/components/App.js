import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [clicked, toggleClick] = useState(false);

  return (
   <div id="main">
      {clicked && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}

      <button id="click" onClick={() => toggleClick((previous) => !previous)}>
        Click me
      </button>
    </div>
  );
}


export default App;
