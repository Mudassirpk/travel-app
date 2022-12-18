import Divider from "./../Divider";
import Friend from "./Friend";

type Props = {
  friends: Array<object>;
};

const FriendsSection: React.FC<Props> = ({ friends }) => {
  console.log(friends);
  return (
    <section className="flex-1 px-3 h-full overflow-y-scroll">
      <h1 className="text-3xl font-semibold text-zinc-800">Friends</h1>
      <Divider customClass="my-4" />
      <div className="w-full my-4 flex flex-col gap-5">
        {friends
          ? friends.map((friend: any) => {
              return (
                <Friend
                  key={friend._id}
                  name={friend.name}
                  followers={friend.followers.length}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};

export default FriendsSection;
