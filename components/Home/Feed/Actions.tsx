import Image from "next/image";

const Actions: React.FC = () => {
  return (
    <div className="my-10 px-8">
      <div className="flex gap-4 items-center">
        <div className="relative w-[40px] h-[40px] rounded-[50%] overflow-hidden">
          <Image
            className="object-cover"
            alt="user / admin"
            src="/images/user.jpg"
            fill={true}
          />
        </div>
        <span className="flex-1 px-4 py-5 rounded-[30px] text-slate-700 cursor-pointer hover:bg-slate-200 text-3xl">
          Share your travelling experience!
        </span>
        <div className="px-4 py-2 my-5 text-center bg-red-400 rounded-[40px] text-2xl text-slate-200 cursor-pointer hover:bg-red-500">
          Add a premier
        </div>
      </div>
    </div>
  );
};

export default Actions;
