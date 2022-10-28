import Image from "next/image";

const Post: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="w-full flex gap-5 items-center">
        <div className="relative w-[40px] overflow-hidden h-[40px] rounded-[50%]">
          <Image
            className="object-cover"
            alt="publisher"
            src="/images/user.jpg"
            fill={true}
          />
        </div>
        <div>
          <p className="text-2xl text-slate-800">Mskhan</p>
          <p className="text-[12px] text-slate-700">2 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
