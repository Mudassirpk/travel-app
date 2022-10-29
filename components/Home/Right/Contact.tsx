import Image from "next/image";

type Props = {
  name: string;
};

const Contact: React.FC<Props> = ({ name }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative w-[40px] h-[40px] cursor-pointer hover:border border-white">
        <Image
          className="object-cover rounded-[50%]"
          alt="person"
          src="/images/user.jpg"
          fill={true}
        />
        <span className="bottom-0 right-0 w-[10px] rounded-[50%] border border-white h-[10px] bg-green-700 absolute"></span>
      </div>
      <p className="text-2xl text-slate-800 hover:underline cursor-pointer">
        {name}
      </p>
    </div>
  );
};

export default Contact;
