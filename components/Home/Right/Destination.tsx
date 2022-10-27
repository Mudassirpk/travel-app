import Image from "next/image";

type Props = {
  city: string;
  country: string;
  image: any;
};

const Destination: React.FC<Props> = ({ city, country, image }) => {
  return (
    <div className="h-[100px] rounded-lg overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          className="object-cover"
          alt="destination photo"
          src={image}
          fill={true}
        />
        <div className="hover:opacity-0 transition-all duration-300 flex text-white flex-col items-center justify-center bg-[rgba(0,0,0,.6)] absolute top-0 left-0 w-full h-full z-10">
          <h1 className="cursor-pointer hover:text-gray-200 text-3xl">
            {city}
          </h1>
          <h2 className="text-2xl cursor-pointer hover:text-gray-200">
            {country}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Destination;
