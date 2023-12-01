import TopNav from "./TopNav";

import { useEffect, useState } from "react";
import "./PostList.style.css";

interface Posts {
  userid: number;
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((posts) => setPosts(posts));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <ul className='container'>
        <TopNav setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        {posts
          .filter((post) => {
            return (
              searchTerm === "" ||
              post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
          .map((post) => {
            return (
              <ul className='post' key={post.id}>
                <li>Author: {post.title}</li>
                <div className='space'></div>
                <li>{post.body}</li>
                <div className='big-space'></div>
              </ul>
            );
          })}
      </ul>
    </>
  );
};

export default PostList;
