import Image from "next/image";

type Props = {
  city: string;
  country: string;
  date: string;
};

const DestinationT: React.FC<Props> = ({ city, country, date }) => {
  return (
    <div className="flex gap-4">
      <div className="relative w-[50px] rounded-xl overflow-hidden aspect-square">
        <Image alt="destination travelled" src="/images/swt.jpg" fill={true} />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl text-slate-800 hover:underline cursor-pointer font-semibold">
          {city} , <span>{country}</span>
        </h1>
        <p className="text-xl text-slate-600">{date}</p>
      </div>
    </div>
  );
};

export default DestinationT;
