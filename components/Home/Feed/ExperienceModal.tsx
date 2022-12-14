import React, { useState, useContext } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { BsFileEarmarkImage, BsChevronUp } from "react-icons/bs";

// components imports
import PreviewModal from "../../../Helper/PreviewModal";

type Props = {
  modalToggler: Function;
};

import dataContext from "../../../Helper/dataContext";

const ExperienceModal: React.FC<Props> = ({ modalToggler }) => {
  const router = useRouter();

  const [postSaved, setPostSaved] = useState<boolean>(false);
  const traveller: any = useContext(dataContext);
  const { data, dataSetter } = traveller;
  const [modalFields, setModalFields] = useState({
    location: "",
    experience: "",
  });

  // image preview functionality
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);
  function togglePreviewModal() {
    setIsPreviewModalOpen(!isPreviewModalOpen);
  }

  function imageSetter(inputImage: File) {
    setImage(inputImage);
  }

  // --- image preview functionality

  const [image, setImage] = useState<File>();

  function fillFormFields(e: React.SyntheticEvent) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    if (target.files) {
      setImage(target.files[0]);
    } else {
      setModalFields({ ...modalFields, [target.id]: target.value });
    }
  }

  async function addPost(e: React.SyntheticEvent) {
    e.preventDefault();

    const emailAndToken = localStorage.getItem("tapp_eAt");
    if (emailAndToken) {
      const jsoneAt: any = JSON.parse(emailAndToken);

      const formData = new FormData();
      if (modalFields.location !== "") {
        if (image) {
          formData.append("photo", image);
        }

        formData.append(
          "text",
          JSON.stringify({
            ...modalFields,
            email: jsoneAt.email,
            poster: data._id,
            poster_image: data.profilePhoto,
          })
        );

        const response = await fetch("/api/home/addpost/", {
          method: "POST",
          headers: {
            "x-auth-token": jsoneAt.token,
          },
          body: formData,
        });
        const jsonResponse = await response.json();
        if (response.status === 201) {
          setPostSaved(true);
          dataSetter(null, null, jsonResponse, "feed");
          setTimeout(modalToggler, 2000);
          router.push("/");
        }
      }
    }
  }

  return !postSaved ? (
    <div className="experience-modal xsm:absolute left-0 transition-all duration-500 z-10 absolute w-[500px] xsm:w-full h-auto p-6 bg-white shadow-slate-400 shadow-xl rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-center font-semibold text-3xl text-slate-800">
          Create new experience
        </h1>
        <BsChevronUp
          onClick={() => modalToggler()}
          className="text-2xl text-slate-800 cursor-pointer"
        />
      </div>
      <form onSubmit={addPost} className="flex flex-col gap-6 my-6">
        <label htmlFor="location" className="flex flex-col gap-2">
          <span className="text-2xl text-slate-800">Location</span>
          <input
            value={modalFields.location}
            onChange={fillFormFields}
            id="location"
            type="text"
            className="border-b-slate-400 border py-2 text-xl outline-none"
            placeholder="Where did you go?"
          />
        </label>{" "}
        <label htmlFor="experience" className="flex flex-col gap-2">
          <span className="text-2xl text-slate-800">Experience</span>
          <textarea
            value={modalFields.experience}
            onChange={fillFormFields}
            id="experience"
            className="border-b-slate-400 border py-2 text-xl outline-none"
            placeholder="What you experienced?"
          />
        </label>
        <div
          className={`w-full relative ${
            isPreviewModalOpen ? "h-[400px]" : " h-[200px]"
          } border border-slate-400 flex justify-center items-center rounded-lg`}
        >
          {isPreviewModalOpen ? (
            <PreviewModal
              innerFull={true}
              absolute={false}
              custormClass={null}
              togglerPreview={togglePreviewModal}
              imageSelector={imageSetter}
            />
          ) : (
            <div
              onClick={togglePreviewModal}
              className="flex flex-col gap-2 text-center"
            >
              <div className="px-4 py-4 rounded-[50%] hover:bg-slate-300 cursor-pointer transition-colors duration-200">
                <BsFileEarmarkImage className="text-3xl" />
              </div>
              <span className="text-xl text-slate-800 font-semibold">
                Photo
              </span>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="py-2 text-2xl rounded-lg cursor-pointer hover:bg-blue-800 font-semibold text-white bg-blue-900"
        >
          Post
        </button>
      </form>
    </div>
  ) : (
    <div className="experience-modal xsm:absolute left-0 flex  items-center justify-center gap-4 py-[4rem] transition-all duration-500 z-10 absolute w-[500px] xsm:w-full h-auto p-6 bg-white shadow-slate-400 shadow-xl rounded-xl">
      <AiFillCheckCircle className="text-5xl text-center text-blue-900" />
      <p className="text-center text-5xl text-blue-900 font-semibold">
        Post Added Successfully
      </p>
    </div>
  );
};

export default ExperienceModal;
