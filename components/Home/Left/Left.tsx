import { useContext } from "react";

import LeftItem from "./LeftItem";
import { MdGroups } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import Link from "next/link";

import dataContext from "./../../../Helper/dataContext";

const Left: React.FC = () => {
  const result: any = useContext(dataContext);
  const { sidebar, data } = result;
  return (
    <section
      className={`flex xsm:absolute ${
        sidebar ? "left-0" : "left-[-100%]"
      } flex-col z-10 xsm:border-r xsm:rounded-none transition-all duration-300 xsm:border-gray-300 gap-2 px-2 py-3 rounded-lg w-[220px] ml-[1.5%] mb-4 bg-white height-cal`}
    >
      <Link href="/user">
        <LeftItem
          image={data?.profilePhoto}
          title={data?.name}
          icon={undefined}
        />
      </Link>
      <Link href="/home/friends">
        <LeftItem image={undefined} title="Friends" icon={<HiUsers />} />
      </Link>
      <Link href="/settings">
        <LeftItem image={undefined} title="Settings" icon={<IoMdSettings />} />
      </Link>
    </section>
  );
};

export default Left;
