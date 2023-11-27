import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState([
    {title: "My new website", body: "lorem ipsum...", id: 1},
    {title: "Welcome to my porto", body: "lorem ipsum...", id: 2},
    {title: "HAHAHAH", body: "lorem ipsum...", id: 3}
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="Title"/>
    </div>
  );
}

export default Home;
