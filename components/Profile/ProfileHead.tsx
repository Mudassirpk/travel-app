import Image from "next/image";

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
        <div className="h-full aspect-square rounded-[50%] overflow-hidden relative">
          <Image
            src="/images/user.jpg"
            className="object-cover"
            alt="profile - user"
            fill={true}
          />
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
