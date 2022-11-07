import Image from "next/image";

type Props = {
  name: string;
  followers: number;
};

const Person: React.FC<Props> = ({ name, followers }) => {
  return (
    <div className="flex gap-4 w-full items-center my-4 mx-4">
      <div className="relative w-[50px] rounded-xl overflow-hidden aspect-square">
        <Image
          alt="person"
          src="/images/user.jpg"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="hover:underline w-max text-2xl font-semibold cursor-pointer text-slate-800">
          {name}
        </h1>
        <p className="text-xl text-slate-700">{followers} Followers</p>
      </div>
      <button className="cursor-pointer hover:bg-blue-700 rounded-xl px-4 py-2 text-white bg-blue-800 font-semibold text-xl">
        Follow
      </button>
    </div>
  );
};

export default Person;
