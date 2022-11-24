import Post from "./Post";
import { useContext, useState, useEffect } from "react";

import dataContext from "./../../../Helper/dataContext";
const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Array<object>>([]);
  const Data: any = useContext(dataContext);
  const { feedData } = Data;

  useEffect(() => {
    setPosts(feedData);
    console.log("posts use effect");
  }, [feedData]);

  return posts ? (
    <div className="flex-1 flex flex-col gap-16 px-5 mt-2">
      {posts.map((post: any) => (
        <Post
          experience={post.experience}
          location={post.location}
          image={post.image}
          key={post._id}
          poster_name={post.poster}
        />
      ))}
    </div>
  ) : (
    <p>You Cought up</p>
  );
};

export default Posts;
