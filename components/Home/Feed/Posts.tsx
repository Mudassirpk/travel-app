import Post from "./Post";

const Posts: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col gap-16 px-5 mt-2">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
