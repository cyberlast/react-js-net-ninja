import { useState } from "react";

const Home = () => {
  let [name, setName] = useState("Ubay");
  let [age, setAge] = useState(18);

  const handleClickAgain = () => {
    setName("Dillah");
    setAge(19);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>My name is {name}, and im {age} years old</p>
      <button onClick={handleClickAgain}>Click Again</button>
    </div>
  );
};

export default Home;
