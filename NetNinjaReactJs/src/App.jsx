// import { useState } from "react";
import "./App.css";

function App() {
  const title = "Welcome To My Web Guys";
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>likes {likes} times</p>
      </div>
    </div>
  );
}

export default App;