import { useState, useContext, useEffect } from "react";
import dataContext from "../../Helper/dataContext";
import Person from "./Person";
import g_f_fetcher from "./../../Helper/global_friends_fetcer";
type Props = {
  kind: string;
};

const Persons: React.FC<Props> = ({ kind }) => {
  const [friends, setFriends] = useState<Array<object>>([]);

  const traveller: any = useContext(dataContext);
  const { data } = traveller;

  useEffect(() => {
    async function fetchFriends() {
      if (kind === "followers") {
        const followers = await g_f_fetcher(data.followers);
        setFriends(followers);
      } else {
        const following = await g_f_fetcher(data.following);
        setFriends(following);
      }
    }

    fetchFriends();
  }, [data.followers, data.following, kind]);
  return (
    <div className="w-full">
      {friends
        ? friends.map((friend: any) => (
            <Person
              id={friend._id}
              key={friend._id}
              name={friend.name}
              followers={friend.followers.length}
            />
          ))
        : null}
    </div>
  );
};

export default Persons;
