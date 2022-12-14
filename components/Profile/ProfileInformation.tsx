import Actions from "../Home/Feed/Actions";
import Posts from "../Home/Feed/Posts";
import DestinationsTravelled from "./DestinationsTravlled";
import About from "./About";
import Persons from "./Persons";
import Divider from "./../Divider";
import Media from "./Media";

type Props = {
  tranformValue: number;
};

const ProfileInformation: React.FC<Props> = ({ tranformValue }) => {
  return (
    <section className="w-full  h-[100vh]">
      <div className="w-full mx-auto h-full overflow-hidden">
        <div
          className="w-[500%] grid grid-cols-5 h-full transition-transform duration-100"
          style={{ transform: `translateX(${-tranformValue}%)` }}
        >
          {/* 1 - Feed */}
          <div className="overflow-y-scroll profile-information ">
            <Actions />
            <Posts />
          </div>

          {/* 2 - About */}
          <div className="w-full">
            <About />
          </div>

          {/* 3 - Followers */}
          <div className="w-full p-4">
            <h1 className="text-4xl my-6 text-slate-800 mx-4 font-semibold">
              Followers
            </h1>
            <Divider customClass={null} />
            <Persons kind="followers" />
          </div>

          {/* 4 - Following */}
          <div className="w-full p-4">
            <h1 className="text-4xl my-6 text-slate-800 mx-4 font-semibold">
              Following
            </h1>
            <Divider customClass={null} />
            <Persons kind="following" />
          </div>

          {/* {5 - media} */}
          <div className="w-full p-4">
            <h1 className="text-4xl my-6 text-slate-800 mx-4 font-semibold">
              Following
            </h1>
            <Divider customClass={null} />
            <Media />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileInformation;
