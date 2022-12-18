import Image from "next/image";

type Props = {
  title: string;
  image: any;
  icon: any;
};

const LeftItem: React.FC<Props> = ({ title, image, icon }) => {
  return (
    <div className="flex gap-3 items-center w-full transition-colors duration-200 px-2 py-2 cursor-pointer hover:bg-gray-300 rounded-md">
      <div className="relative rounded-[50%] overflow-hidden w-[40px] h-[40px]">
        {image ? (
          <Image
            className="object-cover"
            alt="user / you"
            src={image}
            fill={true}
          />
        ) : (
          <div className="text-[30px] text-blue-900 flex items-center h-full justify-center">
            {icon}
          </div>
        )}
      </div>
      <p className="text-3xl text-gray-900">{title}</p>
    </div>
  );
};

export default LeftItem;
