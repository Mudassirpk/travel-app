import React, { useState } from "react";
import Divider from "../Divider";
import { BsFileEarmarkImage, BsCalendar2Date } from "react-icons/bs";

const AdditionalInformation = () => {
  const [additionalFields, setAdditionalField] = useState({
    dob: "Year / Month / Day",
    gender: "",
  });
  const [profilePicture, setProfilePicture] = useState<File>();
  const [isGenderSelected, setIsGenderSelected] = useState<boolean>(false);

  function fillAdditionalFields(e: React.SyntheticEvent) {
    const targetElement: HTMLInputElement = e.target as HTMLInputElement;
    if (targetElement?.files) {
      if (targetElement.files[0]) setProfilePicture(targetElement.files[0]);
      console.log(targetElement.files[0]);
    } else {
      const id = targetElement.name;
      const value = targetElement.value;
      setAdditionalField({ ...additionalFields, [id]: value });
      console.log(additionalFields);
    }
  }

  async function submitAdditionalInformation(e: React.SyntheticEvent) {
    e.preventDefault();
    if (additionalFields.gender !== "" && profilePicture) {
      const formData = new FormData();
      formData.append("text", JSON.stringify(additionalFields));
      formData.append("profile", profilePicture);
      const response = await fetch("/api/additional/", {
        method: "POST",
        body: formData,
      });

      console.log(response.status);
    }
  }

  return (
    <div className="p-5 rounded-xl w-full">
      <h1 className="text-3xl font-semibold text-slate-900">
        Additional Information
      </h1>
      <Divider customClass={"my-4"} />
      <form
        className="w-full flex flex-col gap-5"
        onSubmit={submitAdditionalInformation}
      >
        <label
          htmlFor="dob"
          className="text-2xl font-semibold text-slate-800 flex flex-col gap-3"
        >
          Bate of Birth
          <span className="w-full cursor-pointer text-2xl my-2 flex justify-between items-center px-4 py-2 border border-gray-300 rounded-xl">
            {additionalFields.dob}
          </span>
          <input
            required={true}
            onChange={fillAdditionalFields}
            value={additionalFields.dob}
            type={"date"}
            id="dob"
            name="dob"
            className="px-4 py-2 text-xl border-gray-400 rounded-xl border"
          />
        </label>
        <div className="flex flex-col">
          <p className="text-2xl font-semibold text-slate-800 mb-3">Gender</p>
          <label
            htmlFor="male"
            className="text-xl font-semibold text-slate-800 flex gap-4 items-center cursor-pointer"
          >
            <input
              onChange={fillAdditionalFields}
              id="male"
              value={"male"}
              name="gender"
              type={"radio"}
            />
            Male
          </label>
          <label
            htmlFor="female"
            className="text-xl font-semibold text-slate-800 flex gap-4 items-center cursor-pointer"
          >
            <input
              onChange={fillAdditionalFields}
              id="female"
              value={"female"}
              name="gender"
              type={"radio"}
            />
            Female
          </label>
          <label
            htmlFor="other"
            className="text-xl font-semibold text-slate-800 flex gap-4 items-center cursor-pointer"
          >
            <input
              id="other"
              onChange={fillAdditionalFields}
              value={"other"}
              name="gender"
              type={"radio"}
            />
            Other
          </label>
          {isGenderSelected ? (
            <span className="text-2xl text-red-800 my-3">
              ** Select one of the given options
            </span>
          ) : null}
        </div>{" "}
        <div className="w-full h-[200px] border border-slate-400 flex justify-center items-center rounded-lg">
          <label
            htmlFor="img"
            className="flex flex-col gap-2 justify-center items-center"
          >
            <div className="px-4 w-max py-4 rounded-[50%] hover:bg-slate-300 cursor-pointer transition-colors duration-200">
              <BsFileEarmarkImage className="text-3xl" />
            </div>
            <span className="text-xl text-slate-800 font-semibold">
              Profile Picture
            </span>
            <input
              required={true}
              type="file"
              onChange={fillAdditionalFields}
              id="img"
              className="hidden"
            />
          </label>
        </div>
        <button className="text-xl px-4 py-2 bg-blue-900 text-white rounded-xl hover:bg-blue-800 cursor-pointer">
          Submit
        </button>
        <button
          type="submit"
          className="text-xl px-4 py-2 bg-gray-300 text-slate-900 rounded-xl hover:bg-gray-200 cursor-pointer"
        >
          Add later
        </button>
      </form>
    </div>
  );
};

export default AdditionalInformation;
