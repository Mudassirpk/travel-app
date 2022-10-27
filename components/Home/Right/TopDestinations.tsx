import Destination from "./Destination";

const TopDestinations: React.FC = () => {
  return (
    <div className="w-full px-4 py-4">
      <h1 className="text-3xl text-gray-800 font-semibold">Top Destinations</h1>
      <div className="my-4 w-full h-auto flex flex-col gap-2">
        <Destination
          image="/images/swt.jpg"
          city="Switzland"
          country="Europe"
        />
        <Destination image="/images/ist.jpg" city="Istanbul" country="Turkey" />
      </div>
      <span className="float-right text-xl hover:underline text-blue-900 cursor-pointer">
        See all
      </span>
    </div>
  );
};

export default TopDestinations;
