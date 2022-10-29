import LeftItem from "./LeftItem";
import { MdGroups } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
const Left: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 px-2 py-3 rounded-lg w-[220px] ml-[1.5%] mb-4 bg-white height-cal">
      <LeftItem image="/images/user.jpg" title="Mskhan" icon={undefined} />
      <LeftItem image={undefined} title="Friends" icon={<HiUsers />} />
      <LeftItem image={undefined} title="Groups" icon={<MdGroups />} />
      <LeftItem image={undefined} title="Settings" icon={<IoMdSettings />} />
    </section>
  );
};

export default Left;
