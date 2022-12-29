import Image from "next/image";
type Props = {
  name: string;
  followers: string;
};
const Friend: React.FC<Props> = ({ name, followers }) => {
  console.log(name);
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
        <p className="text-xl font-semibold text-slate-800  w-max ">
          {name}
        </p>
        <p>{followers} Followers</p>
      </div>
    </div>
  );
};

export default Friend;
