import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const UserLogReg: React.FC = () => {
  const [formtoggler, setFormtoggler] = useState(false);

  function toggleForm() {
    setFormtoggler(!formtoggler);
  }

  return (
    <section className="w-full flex-col h-full flex items-center justify-center">
      <h1 className="text-6xl font-semibold my-20 text-blue-900">
        Welcome To TravelBook
      </h1>
      <div className="w-[350px] h-auto bg-white shadow-xl shadow-slate-300  px-5 py-5">
        {formtoggler ? (
          <SignUp toggleForm={toggleForm} />
        ) : (
          <Login toggleForm={toggleForm} />
        )}
      </div>
    </section>
  );
};

export default UserLogReg;
