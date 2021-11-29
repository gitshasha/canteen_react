import axios from "axios";
import React, { useEffect } from "react";

const baseURL = "http://localhost:5000/posts";

export default function PostList({ allorderdetails }) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);
  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function deletePost() {
    axios.delete(`${baseURL}/1`).then(() => {
      alert("Post deleted!");
      setPost(null);
    });
  }
  if (!post) return null;

  return (
    <div>
      <button onClick={createPost}>Create Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
