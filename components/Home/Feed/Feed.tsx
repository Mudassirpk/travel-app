import Divider from "../../Divider";
import Actions from "./Actions";
import Posts from "./Posts";

const Feed: React.FC = () => {
  return (
    <section className="scrollbar-hidden px-[10%] xsm:px-0 flex-1 flex flex-col overflow-y-scroll height-cal">
      <Actions />
      <Divider customClass={null} />
      <Posts />
    </section>
  );
};

export default Feed;
