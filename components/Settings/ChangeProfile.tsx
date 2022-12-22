import Image from "next/image";
import { useState, useContext } from "react";
import { RiImageEditFill } from "react-icons/ri";
import PreviewModal from "../../Helper/PreviewModal";
import filter from "../../Helper/filter";

import dataContext from "./../../Helper/dataContext";

const ChangeProfile: React.FC = () => {
  const traveller: any = useContext(dataContext);
  const { data } = traveller;

  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [image, setImage] = useState<File>();
  const [updatedFields, setUpdatedFields] = useState<object>({
    name: "",
    location: "",
    phone: "",
  });

  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  function imageSelector(input_image: File) {
    setImage(input_image);
  }

  function updateFields(e: React.SyntheticEvent) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    const id = target.id;
    const value = target.value;
    setUpdatedFields({ ...updatedFields, [id]: value });
  }

  async function submitChanges(e: React.SyntheticEvent) {
    e.preventDefault();
    const { token } = JSON.parse(localStorage.getItem("tapp_eAt") as string);
    const form_data = new FormData();

    form_data.append(
      "fields",
      JSON.stringify({ toBeUpdated: filter(updatedFields), id: data._id })
    );
    if (image) {
      form_data.append("newprofile", image);
    }
    if (token) {
      const response = await fetch("/api/settings", {
        method: "post",
        headers: {
          "x-auth-token": token,
        },
        body: form_data,
      });
    }
  }
  return (
    <section className=" font-semibold text-[#0D141A] flex-1 h-full">
      <h1 className="text-[#0D141A] text-[2rem] font-semibold text-center">
        Change Profile
      </h1>
      <form className="w-full gap-[1.7rem] px-[2rem] flex flex-col items-center py-[1rem]">
        <label
          htmlFor="name"
          className="flex text-[1.6rem] w-full font-medium flex-col gap-[.5rem] text-[#2E3236]"
        >
          Name
          <input
            onChange={updateFields}
            id="name"
            type="text"
            className="border border-[#2E3236] outline-none px-2 py-1 rounded-lg"
          />
        </label>
        <label
          htmlFor="location"
          className="flex text-[1.6rem] w-full font-medium flex-col gap-[.5rem] text-[#2E3236]"
        >
          Location
          <input
            onChange={updateFields}
            type="text"
            id="location"
            className="border px-2 py-1 outline-none border-[#2E3236] rounded-lg"
          />
        </label>
        <label
          htmlFor="phone"
          className="flex text-[1.6rem] w-full font-medium flex-col gap-[.5rem] text-[#2E3236]"
        >
          Phone
          <input
            onChange={updateFields}
            type="text"
            id="phone"
            className="border px-2 py-1 outline-none border-[#2E3236] rounded-lg"
          />
        </label>
        <div className="flex w-full flex-col gap-2">
          <p className="text-[1.6rem] font-normal text-[#2E3236] ">
            Profile Picture
          </p>

          <div className="relative h-[15rem] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/user.jpg"
              fill={true}
              className="object-cover"
              alt="admin profile picture"
            />
            <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(46,50,54,.5)]">
              <div
                onClick={togglePreview}
                className="px-2 py-2 rounded-[50%] cursor-pointer hover:bg-blue-900 bg-white"
              >
                <RiImageEditFill className="text-4xl text-blue-900 hover:text-white" />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={submitChanges}
          type="submit"
          className="text-[1.6rem] bg-blue-900 text-white text-normal py-2 px-4 hover:bg-blue-700 rounded-lg"
        >
          Submit Changes
        </button>
      </form>
      {isPreviewOpen ? (
        <PreviewModal
          absolute={true}
          custormClass={null}
          innerFull={false}
          imageSelector={imageSelector}
          togglerPreview={togglePreview}
        />
      ) : null}
    </section>
  );
};

export default ChangeProfile;
