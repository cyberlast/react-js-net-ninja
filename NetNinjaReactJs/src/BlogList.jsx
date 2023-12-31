/* eslint-disable react/prop-types */
const BlogList = ({ blogs, title }) => {
    return ( 
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((e) => (
          <div className="blog-preview" key={e.id}>
            <h2>{e.title}</h2>
            <p>{e.body}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default BlogList;
  