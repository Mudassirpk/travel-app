import TopDestinations from "./TopDestinations";
import Contacts from "./Contacts";

const Right: React.FC = () => {
  return (
    <section className="flex flex-col w-[220px] height-cal mb-4 bg-white mr-[1.5%] rounded-lg">
      <TopDestinations />
      <Contacts />
    </section>
  );
};

export default Right;
