import { BsFileEarmarkImage, BsChevronUp } from "react-icons/bs";
type Props = {
  modalToggler: Function;
};

const ExperienceModal: React.FC<Props> = ({ modalToggler }) => {
  return (
    <div className="experience-modal transition-all duration-500 z-10 absolute w-[500px] h-auto p-6 bg-white shadow-slate-400 shadow-xl rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-center font-semibold text-3xl text-slate-800">
          Create new experience
        </h1>
        <BsChevronUp
          onClick={() => modalToggler()}
          className="text-2xl text-slate-800 cursor-pointer"
        />
      </div>
      <form className="flex flex-col gap-6 my-6">
        <label htmlFor="location" className="flex flex-col gap-2">
          <span className="text-2xl text-slate-800">Location</span>
          <input
            id="location"
            type="text"
            className="border-b-slate-400 border py-2 text-xl outline-none"
            placeholder="Where did you go?"
          />
        </label>{" "}
        <label htmlFor="experience" className="flex flex-col gap-2">
          <span className="text-2xl text-slate-800">Experience</span>
          <textarea
            id="experience"
            className="border-b-slate-400 border py-2 text-xl outline-none"
            placeholder="What you experienced?"
          />
        </label>
        <div className="w-full h-[200px] border border-slate-400 flex justify-center items-center rounded-lg">
          <label htmlFor="img" className="flex flex-col gap-2 text-center">
            <div className="px-4 py-4 rounded-[50%] hover:bg-slate-300 cursor-pointer transition-colors duration-200">
              <BsFileEarmarkImage className="text-3xl" />
            </div>
            <span className="text-xl text-slate-800 font-semibold">Photo</span>
            <input type="file" id="img" className="hidden" />
          </label>
        </div>
        <button className="py-2 text-2xl rounded-lg cursor-pointer hover:bg-blue-800 font-semibold text-white bg-blue-900">
          Post
        </button>
      </form>
    </div>
  );
};

export default ExperienceModal;
