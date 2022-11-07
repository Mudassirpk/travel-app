import DestinationT from "./DestinationT";

const DestinationsTravelled: React.FC = () => {
  return (
    <div className="w-full h-full px-5">
      <h1 className="text-[20px] font-semibold text-slate-800">
        Destinations Travelled
      </h1>
      <div className="py-5 flex flex-col gap-5">
        <DestinationT city="London" country="UK" date="2 / 4 / 2023" />
        <DestinationT city="Istanbul" country="Turkey" date="4 / 4 / 2023" />
      </div>
    </div>
  );
};

export default DestinationsTravelled;
