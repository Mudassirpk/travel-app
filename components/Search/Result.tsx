import Image from "next/image";

type Props = {
  name: String;
  followers: number;
};

const Result: React.FC<Props> = ({ name, followers }) => {
  return (
    <div className="w-full flex gap-5">
      <div className="relative w-[50px] rounded-lg overflow-hidden h-[50px]">
        <Image
          className="object-cover"
          alt="traveller"
          src="/images/user.jpg"
          fill={true}
        />
      </div>
      <div className="flex-1 flex flex-col gap-1 justify-center">
        <p className="text-xl font-semibold text-slate-800 hover:underline w-max cursor-pointer">
          {name}
        </p>
        <p>{followers}</p>
      </div>
      <div className="px-5 flex items-center justify-center">
        <button className="bg-blue-500 px-4 py-2 text-xl hover:bg-blue-600 cursor-pointer text-white font-semibold rounded-lg">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Result;
