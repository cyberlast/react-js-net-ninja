import { useState } from "react";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState([
    {title: "My new website", body: "lorem ipsum...", id: 1},
    {title: "Welcome to my porto", body: "lorem ipsum...", id: 2},
    {title: "HAHAHAH", body: "lorem ipsum...", id: 3}
  ]);


  return (
    <div className="home">
        {blogs.map((e) => (
            <div className="blog-preview" key={e.id}>
                <h2>{e.title}</h2>
                <p>{e.body}</p>
            </div>
        ))}
    </div>
  );
};

export default Home;
