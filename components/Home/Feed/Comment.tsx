import Image from "next/image";

type Props = {
  content: string;
  name: string;
  commentor_image: string;
};

const Comment: React.FC<Props> = ({ content, name, commentor_image }) => {
  return (
    <div className="flex gap-5">
      <div className="relative overflow-hidden w-[40px] h-[40px] rounded-[50%]">
        <Image
          className="object-cover"
          alt="photo of a person who commented"
          src={commentor_image ? commentor_image : "/images/user.jpg"}
          fill={true}
        />
      </div>
      <div className="flex-1">
        <p className="text-2xl mt-1 font-semibold cursor-pointer hover:underline">
          {name}
        </p>
        <p className="text-[12px] font-normaltext-slate-800">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
