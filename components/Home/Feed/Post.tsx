import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import {
  BsThreeDotsVertical,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Comments from "./Comments";
import Divider from "../../Divider";
import dataContext from "../../../Helper/dataContext";
import Loader from "../../../Helper/Loader";
// types
type Props = {
  location: string;
  experience: string;
  image: string;
  poster_name: string;
  likes: number;
  id: string;
  viewer: string;
  likers: Array<string>;
  poster_image: string;
  comments: Array<CommentType>;
};

type Comment = {
  text: String;
  commentor_id: String;
  post_id: String;
};

import { CommentType } from "../../../types/types";

// --- end types

const Post: React.FC<Props> = ({
  location,
  experience,
  image,
  poster_name,
  likes,
  id,
  viewer,
  likers,
  poster_image,
  comments,
}) => {
  const traveller: any = useContext(dataContext);
  const { data } = traveller;

  const [comment, setComment] = useState<Comment>({
    text: "",
    commentor_id: data._id,
    post_id: id,
  });
  const [loader, setLoader] = useState<boolean>(false);
  const [likeLoader,setLikeLoader] = useState<boolean>(false);

  const [post_comments, setComments] = useState<Array<CommentType>>([]);

  const [_likes, set_likes] = useState<number>(likes);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  async function like() {
    setLikeLoader(true)
    const emailAndtoken: any = localStorage.getItem("tapp_eAt");
    const { token } = JSON.parse(emailAndtoken);
    const response = await fetch("/api/home/like/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        currentLikes: _likes,
        likedPost: id,
        liker: viewer,
      }),
    });
    if (response.status === 201) {
      set_likes(_likes + 1);
      setIsLiked(true);
      setLikeLoader(false)
    } else if (response.status === 409) {
      set_likes(_likes - 1);
      setIsLiked(false);
      setLikeLoader(false)
    }
  }

  useEffect(() => {
    set_likes(likes);
    if (likers.includes(viewer)) {
      setIsLiked(true);
    }
  }, [likes]);

  // comments funtionality
  function fillComment(e: React.SyntheticEvent) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    setComment({ ...comment, text: target.value });
  }

  async function submitComment(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoader(true);
    const { token } = JSON.parse(localStorage.getItem("tapp_eAt") as string);
    if (token) {
      const response = await fetch("/api/home/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-auth-token": token,
        },
        body: JSON.stringify(comment),
      });

      const json_response = await response.json();
      if (response.status === 201) {
        setLoader(false);
        setComments([json_response, ...post_comments]);
        setComment({
          text: "",
          commentor_id: data._id,
          post_id: id,
        });
      }
    }
  }

  useEffect(() => {
    setComments(comments);
  }, []);

  // ----end comment functionality

  return (
    <div className="w-[85%] xsm:w-full mx-auto ">
      <div className="w-full flex gap-5 items-center xsm:px-5 mb-6">
        <div className="relative w-[40px] overflow-hidden h-[40px] rounded-[50%]">
          <Image
            className="object-cover"
            alt="publisher"
            src={poster_image}
            fill={true}
          />
        </div>
        <div className="flex-1">
          <p className="cursor-pointer text-2xl hover:underline text-slate-800">
            {poster_name}
          </p>
          <p className="text-[12px] text-slate-700">2 days ago</p>
        </div>
        
      </div>
      <div className="xsm:px-5">
        <p className="text-[14px] py-2 text-gray-800 rounded-lg">
          {experience}
          <span className="mx-4 cursor-pointer text-black hover:underline">
            See more
          </span>
        </p>
        <p className="text-2xl flex items-center gap-2 my-4 font-semibold text-blue-900">
          <GoLocation /> <span>{location}</span>
        </p>
      </div>
      {/*post image*/}
      <div className="relative w-full h-[280px] xsm:rounded-none my-6 rounded-lg overflow-hidden">
        <Image
          alt="post image"
          className="object-cover"
          src={image}
          fill={true}
        />
      </div>
      {/*viewer's action e.g like and comment*/}
      <div className="py-2 flex gap-2 my-3 xsm:px-5">
      {
        likeLoader?<Loader fill={false} size={2} wait={false} />:    <div className="flex gap-2 items-end px-5 py-3 rounded-[20px] hover:bg-white">
          <AiFillLike
            onClick={like}
            className={`text-[20px] cursor-pointer transition-transform hover:scale-125 ${
              isLiked ? "text-blue-900" : "text-gray-400"
            } cursor-pointer"`}
          />
          <span className="font-semibold text-slate-800 text-2xl">
            {_likes}
          </span>
        </div>
      }
    
        {/* viewer's commenting section */}
        <form className="flex-1 px-3 py-3 rounded-3xl flex gap-3 bg-slate-300 items-center">
          <input
            onChange={fillComment}
            value={comment.text as string}
            type="text"
            className="h-full text-2xl flex-1 bg-slate-300 outline-none"
            placeholder="Comment"
          />
          <button type="submit" onClick={submitComment}>
            <BsFillArrowRightCircleFill className="text-3xl  text-blue-900 cursor-pointer" />
          </button>
        </form>
        {/* ---------------------------------- */}
      </div>
      <Comments isLoading={loader} comments={post_comments} />
      <Divider customClass={"mt-4"} />
    </div>
  );
};

export default Post;
