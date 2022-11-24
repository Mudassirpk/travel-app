import Image from "next/image";
import { BsCamera } from "react-icons/bs";

const ProfileHead = () => {
  return (
    <section className="w-full relative">
      <div className="w-full h-[250px] relative">
        <Image
          src="/images/swt.jpg"
          className="object-cover"
          alt="cover-photo"
          fill={true}
        />
      </div>
      <div className="bottom-[-10rem] flex gap-8 items-center w-full absolute h-64 pl-[10rem] pr-[2rem]">
        <div className="h-full aspect-square  relative">
          <Image
            src="/images/user.jpg"
            className="object-cover rounded-[50%]"
            alt="profile - user"
            fill={true}
          />
          <div className="absolute bottom-[2rem] bg-gray-200 hover:bg-gray-300 cursor-pointer transition-color duration-[.3s] rounded-xl px-2 py-2 z-50 right-0 text-5xl">
            <BsCamera  className="text-blue-900"/>
          </div>
        </div>
        <div className="flex-1 pt-14">
          <p className="text-[20px] text-slate-900">Mudassir Khan</p>
          <p className="text-[16px] text-slate-700">200 followers</p>
        </div>
        <button className="self-start mt-[2rem] bg-gray-200 hover:bg-gray-100 text-slate-800 px-[10px] py-[5px] rounded-lg text-[14px] font-normal">
          Edit cover photo
        </button>
      </div>
    </section>
  );
};

export default ProfileHead;
