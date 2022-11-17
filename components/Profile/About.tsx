import Divider from "../Divider";
import InfoBox from "./InfoBox";
const About: React.FC = () => {
  return (
    <div className="w-full text-center">
      <h1 className="text-4xl my-6 text-slate-800 mx-4 font-semibold">About</h1>
      <Divider customClass={null} />
      <div className="py-8 flex flex-col gap-5">
        <InfoBox heading="Name" content="Mudassir Sarfraz Khan" />
        <InfoBox heading="Date of Birth" content="3 September 2002" />
        <InfoBox heading="Gender" content="Male" />
        <InfoBox heading="Location" content="Haripur , KPK , Pakistan" />
        <InfoBox heading="Joined" content="7 October 2022" />
        <InfoBox heading="Travells" content="33" />
        <InfoBox heading="Followers" content="200" />
        <InfoBox heading="Following" content="20" />
      </div>
    </div>
  );
};

export default About;
