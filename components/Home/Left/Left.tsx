import LeftItem from "./LeftItem";
import { MdGroups } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import Link from "next/link";

type Props = {
  userName: string;
};

const Left: React.FC<Props> = ({ userName }) => {
  return (
    <section className="flex flex-col gap-2 px-2 py-3 rounded-lg w-[220px] ml-[1.5%] mb-4 bg-white height-cal">
      <Link href="/user">
        <LeftItem image="/images/user.jpg" title={userName} icon={undefined} />
      </Link>
      <Link href="/home/friends">
        <LeftItem image={undefined} title="Friends" icon={<HiUsers />} />
      </Link>
      <LeftItem image={undefined} title="Groups" icon={<MdGroups />} />
      <LeftItem image={undefined} title="Settings" icon={<IoMdSettings />} />
    </section>
  );
};

export default Left;
