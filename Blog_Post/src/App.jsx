import { useContext, useState } from "react";
import "./App.css";
import { createContext } from "react";
import Test from "./Test";
const PostContext = createContext();
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
    <PostContext.Provider
      value={{
        result: filteredPosts.length,
        search,
        setSearch,
        post,
        setPost,
        title,
        setTitle,
        body,
        setBody,
        filteredPosts,
      }}
    >
      <div className="container">
        <Header />
        <AddPost />
        <BlogPostContainer />
      </div>
    </PostContext.Provider>
  );
}

function Header() {
  const { search, setSearch, setPost, result } = useContext(PostContext);

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

function AddPost() {
  const { title, setTitle, body, setBody, post, setPost } =
    useContext(PostContext);
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

function BlogPostContainer() {
  const { filteredPosts } = useContext(PostContext);
  console.log(filteredPosts);
  return (
    <>
      <div className="post_Container">
        {filteredPosts?.map((post) => (
          <BlogPost key={post?.id} title={post?.title} body={post?.body} />
        ))}
      </div>
      {/* <Test /> */}
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
