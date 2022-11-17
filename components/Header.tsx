import { HiOutlineHome } from "react-icons/hi";
import { BiSearch, BiUser } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import Link from "next/link";
import React, { useState } from "react";
const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  function fillSearchQuery(e: React.SyntheticEvent) {
    const field: any = e.target;
    const value = field.value;
    setSearchQuery(value as string);
  }

  return (
    <header className="w-[97%] bg-white mx-auto flex items-center my-4 py-4 rounded-lg px-4">
      <Link href={"/"}>
        <h1 className="flex items-center text-4xl text-blue-900 gap-1 font-semibold">
          <HiOutlineHome />
          Travelbook
        </h1>
      </Link>
      <div className="flex-1 flex mx-10 rounded-lg border overflow-hidden px-2 border-blue-900 items-center gap-2">
        <input
          value={searchQuery}
          onChange={fillSearchQuery}
          className="flex-1 outline-none px-2 py-2 text-2xl"
          type="search"
        />
        <Link href={`/home/${searchQuery}`}>
          <BiSearch className="text-3xl text-blue-900 cursor-pointer" />
        </Link>
      </div>
      <div className="text-blue-900 text-4xl flex items-center h-full gap-3">
        <div className="icon-hover">
          <BsBell />
        </div>
        <Link href={"/user"}>
          <div className="icon-hover">
            {" "}
            <BiUser />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
