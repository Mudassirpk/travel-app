import Image from "next/image";
import useFollow from "./../../Helper/Follow";
import { useContext, useState, useEffect } from "react";
type Props = {
  name: String;
  followers: number;
  id: string;
};

import dataContext from "../../Helper/dataContext";

const Result: React.FC<Props> = ({ name, followers, id }) => {
  const [followButton, setFollowButton] = useState<boolean>(false);

  const traveller: any = useContext(dataContext);
  const { data } = traveller;
  async function followTraveller() {
    const response = await useFollow(id, data._id);
    if (response?.status === 201) {
      setFollowButton(true);
    }
  }

  useEffect(() => {
    if (data.following?.includes(id)) {
      setFollowButton(true);
    }
  }, []);
  return (
    <div className="w-full flex gap-5">
      <div className="relative w-[50px] rounded-lg overflow-hidden h-[50px]">
        <Image
          className="object-cover"
          alt="traveller"
          src="/images/user.jpg"
          fill={true}
        />
      </div>
      <div className="flex-1 flex flex-col gap-1 justify-center">
        <p className="text-xl font-semibold text-slate-800 hover:underline w-max cursor-pointer">
          {name}
        </p>
        <p>{followers} Followers</p>
      </div>
      <div className="px-5 flex items-center justify-center">
        {!followButton ? (
          <button
            onClick={followTraveller}
            className="bg-blue-500 px-4 py-2 text-xl hover:bg-blue-600 cursor-pointer text-white font-semibold rounded-lg"
          >
            Follow
          </button>
        ) : (
          <p className="px-4 py-2 text-xl bg-grey-400 text-slate-800">
            Following
          </p>
        )}
      </div>
    </div>
  );
};

export default Result;
