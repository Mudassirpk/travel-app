import Divider from "../Divider";
import InfoBox from "./InfoBox";
import Link from "next/link";
import { useContext } from "react";
import dataContext from "../../Helper/dataContext";
import { CiEdit } from "react-icons/ci";
const About: React.FC = () => {
  const result: any = useContext(dataContext);
  const { data } = result;
  return (
    <div className="w-full text-center">
      <h1 className="text-4xl my-6 text-slate-800 mx-4 w-full flex gap-2 justify-center items-center font-semibold">
        About{" "}
        <Link href="/settings">
          <CiEdit />
        </Link>
      </h1>
      <Divider customClass={null} />
      <div className="py-8 flex flex-col gap-5">
        <InfoBox heading="Name" content={data.name} />
        <InfoBox heading="Date of Birth" content={data.dob} />
        <InfoBox heading="Gender" content={data.gender} />
        <InfoBox heading="Location" content={data.location} />
        <InfoBox heading="Joined" content="7 October 2022" />
        <InfoBox heading="Posts" content={data.posts.length} />
        <InfoBox heading="Followers" content={data.followers.length} />
        <InfoBox heading="Following" content={data.following.length} />
      </div>
    </div>
  );
};

export default About;

