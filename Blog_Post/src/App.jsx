import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState([]);
  return (
    <>
      <div className="container">
        <Header />
        <AddPost />
        <BlogPostContainer />
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">The Blog Post</div>
        <div className="left">
          <p className="result">X Post found</p>
          <p className="search">
            <input type="text" placeholder="Search Post" />
          </p>
          <p className="clearPost">Clear Post</p>
        </div>
      </div>
    </>
  );
}

function AddPost() {
  return (
    <>
      <div className="addpost">
        <input type="text" placeholder="Post-title" className="Title" />

        <textarea type="text" placeholder="Post-Body" className="body" />

        <button>Add post</button>
      </div>
    </>
  );
}

function BlogPostContainer() {
  return (
    <>
      <div className="post_Container">
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </>
  );
}

function BlogPost() {
  return (
    <>
      <div className="post">
        <p className="post_title">My Blog Post</p>
        <p className="post_body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet illo
          odio doloremque, dolorum nobis neque quaerat pariatur quibusdam rem
          aliquam velit veritatis ducimus nostrum sapiente corporis fugit ipsam
          distinctio consequatur.
        </p>
      </div>
    </>
  );
}

export default App;
