import Image from "next/image";
import { useContext, useEffect, useState } from "react";

type Props = {
  name: string;
  followers: number;
  id: string;
};

import dataContext from "../../Helper/dataContext";
import follow from './../../Helper/Follow'
import Loader from './../../Helper/Loader'

const Person: React.FC<Props> = ({ name, followers, id }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const traveller: any = useContext(dataContext);
  const { data } = traveller;

  async function followBack(){
    setIsLoading(true)
    const response = await follow(id,data._id);
    if(response?.status === 201){
      setIsLoading(false)
      setIsFollowing(true)
    }
  }

  useEffect(() => {
    if (data.following.includes(id)) {
      setIsFollowing(true);
    }
  }, []);

  return (
    <div className="flex gap-4 w-full items-center my-4 mx-4">
      <div className="relative w-[50px] rounded-xl overflow-hidden aspect-square">
        <Image
          alt="person"
          src="/images/user.jpg"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="hover:underline w-max text-2xl font-semibold cursor-pointer text-slate-800">
          {name}
        </h1>
        <p className="text-xl text-slate-700">{followers} Followers</p>
      </div>
      {
        isLoading?<Loader size={2} fill={false} wait={false} />: <div>   {isFollowing ? (
        <p className="rounded-xl px-4 py-2 text-slate-800 bg-grey-300 font-semibold text-xl">
          Following
        </p>
      ) : (
        <button onClick={followBack} className="cursor-pointer hover:bg-blue-700 rounded-xl px-4 py-2 text-white bg-blue-800 font-semibold text-xl">
          Follow back
        </button>
      )}
      </div>
      }
     
   
    </div>
  );
};

export default Person;
