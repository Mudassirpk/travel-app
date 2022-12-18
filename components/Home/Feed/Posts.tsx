import Post from "./Post";
import { useContext, useState, useEffect } from "react";

import dataContext from "./../../../Helper/dataContext";
const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Array<object>>([]);

  const Data: any = useContext(dataContext);
  const { data, feedData, dataSetter } = Data;
  useEffect(() => {
    setPosts(feedData);
    console.log("from posts: ", feedData);
  }, [feedData]);

  return posts ? (
    <div className="flex-1 flex flex-col gap-16 px-5 xsm:px-0 mt-2">
      {posts.map((post: any) => (
        <Post
          experience={post.experience}
          location={post.location}
          image={post.image}
          key={post._id}
          poster_name={post.poster}
          likes={post.likes}
          id={post._id}
          viewer={data._id}
          likers={post.likers}
          poster_image={post.poster_image}
          comments={post.comments}
        />
      ))}
    </div>
  ) : (
    <p>You Cought up</p>
  );
};

export default Posts;
