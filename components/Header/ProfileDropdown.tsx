import Link from "next/link";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/router";
type Props = {
  profileDropdownStatus: boolean;
};

const ProfileDropdown: React.FC<Props> = ({ profileDropdownStatus }) => {
  const router = useRouter();
  function Logout() {
    localStorage.removeItem("tapp_eAt");
    router.push("/");
  }

  return (
    <div
      className={`absolute z-30 transition-all duration-300 overflow-hidden ease-in ${
        profileDropdownStatus ? "h-[9rem] py-5 px-3" : "h-0 p-0 "
      } shadow-xl shadow-black right-2 top-[7rem] flex flex-col w-[10rem] items-center gap-2 rounded-lg bg-white`}
    >
      <Link
        className="text-2xl flex gap-2 items-center justify-center w-full py-2 hover:bg-gray-300 rounded-lg"
        href={"/user"}
      >
        <AiOutlineUser /> Profile
      </Link>
      <button
        onClick={Logout}
        className="text-2xl flex gap-2 items-center justify-center w-full text-gray-200 text-center py-2 hover:bg-gray-300 bg-red-900 rounded-lg"
      >
        <AiOutlineLogout />
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;
