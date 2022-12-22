import Image from "next/image";
import { BsCamera } from "react-icons/bs";
import { useContext } from "react";
import dataContext from "../../Helper/dataContext";

const ProfileHead = () => {
  const result: any = useContext(dataContext);
  const { data } = result;
  return (
    <section className="w-full my-[2rem] relative">
     
      <div className="bottom-[-10rem] md:z-20  md:p-0 flex md:flex-col md:justify-center gap-8 md:gap-2 items-center w-full  h-64 md:h-[22rem] pl-[10rem] pr-[2rem]">
        <div className="h-full aspect-square relative z-50">
          <Image
            src="/images/user.jpg"
            className="object-cover rounded-lg"
            alt="profile - user"
            fill={true}
          />
         
        </div>
        <div className="flex-1 md:flex-initial md:p-0 md:border  pt-14 md:text-center">
          <p className="text-[20px] text-slate-900">{data.name}</p>
          <p className="text-[16px] text-slate-700">
            {data.followers?data.followers.length:0} followers
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default ProfileHead;
