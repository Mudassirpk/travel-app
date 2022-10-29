import Image from "next/image";
import {
  BsThreeDotsVertical,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

import Comments from "./Comments";
import Divider from "../../Divider";

const Post: React.FC = () => {
  return (
    <div className="w-[85%] mx-auto">
      <div className="w-full flex gap-5 items-center mb-6">
        <div className="relative w-[40px] overflow-hidden h-[40px] rounded-[50%]">
          <Image
            className="object-cover"
            alt="publisher"
            src="/images/user.jpg"
            fill={true}
          />
        </div>
        <div className="flex-1">
          <p className="text-2xl text-slate-800">Mskhan</p>
          <p className="text-[12px] text-slate-700">2 days ago</p>
        </div>
        <BsThreeDotsVertical className="text-[25px] text-slate-800 cursor-pointer hover:text-slate-700" />
      </div>
      <div>
        <p className="text-[14px] py-2 text-gray-800 rounded-lg">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
          <span className="mx-4 cursor-pointer text-black hover:underline">
            See more
          </span>
        </p>
      </div>
      {/*post image*/}
      <div className="relative w-full h-[280px] my-6 rounded-lg overflow-hidden">
        <Image alt="post image" src="/images/swt.jpg" fill={true} />
      </div>
      {/*viewer's action e.g like and comment*/}
      <div className="py-2 flex gap-2 my-3">
        <div className="flex gap-2 items-end px-5 py-3 rounded-[20px] bg-slate-300 hover:bg-white">
          <AiFillLike className="text-[20px] transition-transform hover:scale-125 text-blue-900 cursor-pointer" />
          <span className="font-semibold text-slate-800 text-2xl">67</span>
        </div>
        <div className="flex-1 px-3 py-3 rounded-3xl flex gap-3 bg-slate-300 items-center">
          <input
            type="text"
            className="h-full text-2xl flex-1 bg-slate-300 outline-none"
            placeholder="Comment"
          />
          <BsFillArrowRightCircleFill className="text-3xl  text-blue-900 cursor-pointer" />
        </div>
      </div>
      <Comments />
      <Divider />
    </div>
  );
};

export default Post;
