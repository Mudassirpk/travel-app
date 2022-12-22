import { useState } from "react";
import Image from "next/image";
import { ImCross } from "react-icons/im";

type Props = {
  togglerPreview: Function;
  imageSelector: Function;
  custormClass: string | null;
  absolute: boolean;
  innerFull: boolean;
};

const PreviewModal: React.FC<Props> = ({
  togglerPreview,
  imageSelector,
  custormClass,
  absolute,
  innerFull,
}) => {
  const [previewImage, setPreviewImage] = useState<String>("");
  const [selectedImage, setSelectedImage] = useState<File>();

  function ExitPreviewModal(e: React.SyntheticEvent) {
    const target: HTMLDivElement = e.target as HTMLDivElement;
    if (target.id === "overlay" || target.id === "exit") {
      togglerPreview();
    }
  }

  function setPreview(e: React.SyntheticEvent) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    if (target.files) {
      const file = target?.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = function () {
        setPreviewImage(fileReader.result as String);
        setSelectedImage(file);
      };
    }
  }

  function confirmImage() {
    if (selectedImage) {
      imageSelector(selectedImage);
      togglerPreview();
    }
  }

  return (
    <section
      onClick={ExitPreviewModal}
      id="overlay"
      className={`${
        absolute ? "absolute" : ""
      } w-full z-10 h-full left-0 top-0 flex items-center justify-center ${custormClass}`}
      style={{
        background: "rgba(0,0,0,0.4)",
      }}
    >
      <div
        className={`
        } flex flex-col items-center rounded-lg gap-4 p-5 justify-center`}
        style={{
          width: innerFull ? "100%" : "80%",
          height: innerFull ? "100%" : "auto",
          background: "white",
        }}
      >
        <div className="w-full flex justify-between">
          <p className="w-full text-3xl">Chose Image</p>
          <ImCross
            className="z-10 cursor-pointer text-2xl"
            onClick={() => togglerPreview()}
            style={{
              color: "maroon",
            }}
          />
        </div>
        <label htmlFor="file" className="w-full">
          <p
            className="px-4 flex justify-between text-xl text-slate-800 w-full jus cursor-pointer border border-[#2E3236] rounded-lg"
            style={{
              paddingTop: "1rem",
              paddingBottom: ".6rem",
            }}
          >
            <p>Upload from your device</p>{" "}
            <p className="border  border-l-[#2E3236] text-xl">Browse</p>
          </p>
          <input
            onChange={setPreview}
            type={"file"}
            accept="image/*"
            className="hidden"
            id="file"
          />
        </label>
        <div
          className="w-full flex items-center justify-center border border-gray-300 rounded-lg"
          style={{
            height: "30rem",
          }}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            {previewImage ? (
              <Image
                alt="preview"
                className="object-cover"
                src={previewImage ? (previewImage as string) : ""}
                fill={true}
              />
            ) : (
              <p className="text-2xl font-semibold text-slate-900">
                No image chosen
              </p>
            )}
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={() => confirmImage()}
            className="float-right text-xl hover:bg-blue-800 text-white bg-blue-900 py-2 px-4 rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreviewModal;
