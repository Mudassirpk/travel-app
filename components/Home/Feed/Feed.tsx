import Actions from "./Actions";
import Posts from "./Posts";
const Feed: React.FC = () => {
  return (
    <section className="flex-1 height-cal">
      <Actions />
      <Posts />
    </section>
  );
};

export default Feed;
