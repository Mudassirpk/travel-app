import { useState, useContext } from "react";

import Image from "next/image";
import Divider from "../../Divider";
import ExperienceModal from "./ExperienceModal";
import dataContext from "../../../Helper/dataContext";
import PreviewModal from "../../../Helper/PreviewModal";

const Actions: React.FC = () => {
  const [experienceModal, setExperienceModal] = useState(false);
  const result: any = useContext(dataContext);
  const { data } = result;
  function toggleExperienceModal() {
    setExperienceModal(!experienceModal);
  }

  return (
    <div className="my-10 px-8 relative">
      <div className="flex gap-4 items-center mb-4">
        <div className="relative w-[40px] h-[40px] rounded-[50%] overflow-hidden">
          <Image
            className="object-cover"
            alt="user / admin"
            src={data.profilePhoto}
            fill={true}
          />
        </div>
        <span
          onClick={toggleExperienceModal}
          className="flex-1 px-4 py-5 rounded-[30px] text-slate-700 cursor-pointer hover:bg-slate-200 text-3xl"
        >
          Share your travelling experience!
        </span>
        <div className="px-4  py-2 my-5 text-center bg-red-400 rounded-[40px] text-2xl text-slate-200 cursor-pointer hover:bg-red-500">
          <p className="xsm:hidden block">Add a premier</p>
          <p className="xsm:block hidden">P</p>
        </div>
      </div>
      <Divider customClass={null} />
      {experienceModal ? (
        <ExperienceModal modalToggler={toggleExperienceModal} />
      ) : null}
    </div>
  );
};

export default Actions;
