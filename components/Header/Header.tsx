import { useContext } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { BiSearch, BiUser } from "react-icons/bi";
import { BsBell, BsSearch } from "react-icons/bs";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import dataContext from "../../Helper/dataContext";
import { dataTypes } from "../../Helper/dataContext";
import ProfileDropdown from "./ProfileDropdown";

const Header: React.FC = () => {
  const result: dataTypes | null = useContext(dataContext);
  const { sidebarToggler } = result as dataTypes;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchPanel, setSearchPanel] = useState<boolean>(false);
  const [profileDropdown, setProfileDropdown] = useState<boolean>(false);

  function fillSearchQuery(e: React.SyntheticEvent) {
    const field: any = e.target;
    const value = field.value;
    setSearchQuery(value as string);
  }

  return (
    <header className="w-[97%] relative bg-white mx-auto flex items-center xsm:justify-between my-4 py-4 rounded-lg px-4">
      <div className="items-center flex gap-4">
        <AiOutlineMenu
          onClick={() => sidebarToggler()}
          className="text-4xl hidden cursor-pointer xsm:block text-blue-900"
        />
        <Link href={"/"}>
          <h1 className="flex items-center text-4xl text-blue-900 gap-1 font-semibold">
            <HiOutlineHome />
            <span className="xsm:hidden">Travelbook</span>
          </h1>
        </Link>
      </div>

      <div
        className={`flex-1 z-50 block xsm:${
          searchPanel ? "" : "hidden"
        } flex mx-10 rounded-lg xsm:absolute xsm:bg-blue-900 xsm:top-[7rem] xsm:m-[0] xsm:w-[90%] xsm:left-[5%] xsm:p-[0] xsm:px-4 border overflow-hidden px-2 border-blue-900 items-center gap-2`}
      >
        <input
          value={searchQuery}
          onChange={fillSearchQuery}
          className="flex-1 outline-none px-2 py-2 xsm:py-4 text-2xl"
          type="search"
        />
        <Link href={`/home/${searchQuery}`}>
          <BiSearch className="text-3xl xsm:text-[3rem] xsm:text-white text-blue-900 cursor-pointer" />
        </Link>
      </div>

      <div className="text-blue-900 text-4xl flex items-center h-full gap-3">
        <BsSearch
          onClick={() => setSearchPanel(!searchPanel)}
          className="hidden xsm:inline"
        />
       
        <div>
          <div
            onClick={() => setProfileDropdown(!profileDropdown)}
            className="icon-hover"
          >
            {" "}
            <BiUser />
          </div>
          <ProfileDropdown profileDropdownStatus={profileDropdown} />
        </div>
      </div>
    </header>
  );
};

export default Header;
