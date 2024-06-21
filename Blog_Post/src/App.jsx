import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const filteredPosts = post.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <Header
          search={search}
          setSearch={setSearch}
          post={post}
          setPost={setPost}
          result={filteredPosts.length}
        />
        <AddPost
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          post={post}
          setPost={setPost}
        />
        <BlogPostContainer post={filteredPosts} />
      </div>
    </>
  );
}

function Header({ search, setSearch, setPost, result }) {
  return (
    <>
      <div className="header">
        <div className="logo">The Blog Post</div>
        <div className="left">
          <p className="result">{result} Post found</p>
          <p className="search">
            <input
              type="text"
              placeholder="Search Post"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </p>
          <p className="clearPost" onClick={() => setPost([])}>
            Clear Post
          </p>
        </div>
      </div>
    </>
  );
}

function AddPost({ title, setTitle, body, setBody, post, setPost }) {
  const addPost = () => {
    if (!title || !body) return;
    setPost([...post, { title, body, id: Math.random() }]);
    setTitle("");
    setBody("");
  };
  console.log(post);
  return (
    <>
      <div className="addpost">
        <input
          type="text"
          placeholder="Post-title"
          className="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Post-Body"
          className="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />

        <button onClick={addPost}>Add post</button>
      </div>
    </>
  );
}

function BlogPostContainer({ post }) {
  return (
    <>
      <div className="post_Container">
        {post?.map((post) => (
          <BlogPost key={post?.id} title={post?.title} body={post?.body} />
        ))}
      </div>
    </>
  );
}

function BlogPost({ title, body }) {
  return (
    <>
      <div className="post">
        <p className="post_title">{title}</p>
        <p className="post_body">{body}</p>
      </div>
    </>
  );
}

export default App;
