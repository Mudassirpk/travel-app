import Actions from "../Home/Feed/Actions";
import Posts from "../Home/Feed/Posts";
import DestinationsTravelled from "./DestinationsTravlled";
import About from "./About";
import Persons from "./Persons";
import Person from "./Person";
import Divider from "./../Divider";

type Props = {
  tranformValue: number;
};

const ProfileInformation: React.FC<Props> = ({ tranformValue }) => {
  return (
    <section className="w-full flex gap-5 h-[100vh]">
      <div className="flex-1 h-full overflow-hidden">
        <div
          className="w-[400%] grid grid-cols-4 h-full transition-transform duration-100"
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
        </div>
      </div>
      <div className="w-[300px]">
        <DestinationsTravelled />
      </div>
    </section>
  );
};

export default ProfileInformation;
