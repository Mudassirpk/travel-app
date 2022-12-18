import Image from "next/image";
import { BsCamera } from "react-icons/bs";
import { useContext } from "react";
import dataContext from "../../Helper/dataContext";

const ProfileHead = () => {
  const result: any = useContext(dataContext);
  const { data } = result;
  return (
    <section className="w-full relative">
      <div className="w-full h-[250px] relative">
        <Image
          src={data.profilePhoto}
          className="object-cover"
          alt="cover-photo"
          fill={true}
        />
      </div>
      <div className="bottom-[-10rem]   md:z-20  md:p-0 flex md:flex-col md:justify-center gap-8 md:gap-2 items-center w-full absolute h-64 md:h-[22rem] pl-[10rem] pr-[2rem]">
        <div className="h-full aspect-square relative z-50">
          <Image
            src="/images/user.jpg"
            className="object-cover rounded-[50%]"
            alt="profile - user"
            fill={true}
          />
          <div className="absolute bottom-[2rem] bg-gray-200 hover:bg-gray-300 cursor-pointer transition-color duration-[.3s] rounded-xl px-2 py-2 z-50 right-0 text-5xl">
            <BsCamera className="text-blue-900" />
          </div>
        </div>
        <div className="flex-1 md:flex-initial md:p-0 md:border  pt-14 text-center">
          <p className="text-[20px] text-slate-900">{data.name}</p>
          <p className="text-[16px] text-slate-700">
            {data.followers.length} followers
          </p>
        </div>
        <div className="self-start md:absolute  md:top-[5rem] md:right-2 mt-[2rem]">
          <button className="xsm:hidden bg-gray-200 hover:bg-gray-100 text-slate-800 px-[10px] py-[5px] rounded-lg text-[14px] font-normal">
            {" "}
            Edit cover photo
          </button>
          <div className="hidden xsm:block bg-gray-200 hover:bg-gray-300 cursor-pointer transition-color duration-[.3s] rounded-xl px-2 py-2 z-50 right-0 text-5xl">
            <BsCamera className="text-blue-900" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHead;
