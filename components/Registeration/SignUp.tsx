import { useState } from "react";
import AdditionalInformation from './AdditionalInformation'
type Props = {
  toggleForm: Function;
};

type formType = {
  name: string;
  email: string;
  password: string;
  cpassword: string;
};

const SignUp: React.FC<Props> = ({ toggleForm }) => {
  const [isPasswordMatched, setIsPasswordMatched] = useState<boolean>(true);
  const [signUp, setSignUp] = useState<boolean>(true);
  const [dupEmailError, setDupEmailError] = useState<boolean>(false);
  const [signUPData, setSignUpData] = useState<formType>({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  function fillSignUpData(e: React.SyntheticEvent) {
    const value = e.target as HTMLTextAreaElement;
    const id = e.target as HTMLTextAreaElement;
    setSignUpData({ ...signUPData, [id.id]: value.value });
  }

  async function submitForm(e: React.SyntheticEvent) {
    e.preventDefault();
    if (signUPData.password === signUPData.cpassword) {
      setIsPasswordMatched(true);
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(signUPData),
      });

      const jsonResponse = await response.json();
      if (response.status === 201) {
        setSignUp(true);
      } else if (response.status === 400 && jsonResponse.code === 11000) {
        setDupEmailError(true);
      } else {
        setDupEmailError(false);
      }
    } else {
      setIsPasswordMatched(false);
    }
  }

  return signUp ? (
    <AdditionalInformation />
  ) : (
    <form onSubmit={submitForm} className="flex flex-col gap-3">
      <h1 className="text-3xl mb-4 text-slate-800 font-semibold text-center">
        Sign Up
      </h1>
      <label htmlFor="name" className="text-xl flex flex-col gap-3">
        Name
        <input
          onChange={fillSignUpData}
          value={signUPData.name}
          type="text"
          id="name"
          required
          className="border border-slate-400 px-4 py-2 rounded-lg text-xl outline-none"
        />
      </label>

      <label htmlFor="email" className="text-xl flex flex-col gap-3">
        <div>
          Email
          {dupEmailError ? (
            <span className="text-2xl text-red-500 mx-4">
              ** Email already exists
            </span>
          ) : null}
        </div>
        <input
          onChange={fillSignUpData}
          value={signUPData.email}
          type="email"
          id="email"
          required
          className="border border-slate-400 px-4 py-2 rounded-lg text-xl outline-none"
        />
      </label>

      <label htmlFor="password" className="text-xl flex flex-col gap-3">
        Passord
        <input
          onChange={fillSignUpData}
          value={signUPData.password}
          type="password"
          id="password"
          minLength={8}
          required
          className="border border-slate-400 px-4 py-2 rounded-lg text-xl outline-none"
        />
      </label>

      <label htmlFor="cpassword" className="text-xl flex flex-col gap-3">
        <div>
          Confirm Password{" "}
          {!isPasswordMatched ? (
            <span className="text-2xl text-red-500 mx-4">
              **Passwords not matched
            </span>
          ) : null}
        </div>
        <input
          required
          onChange={fillSignUpData}
          value={signUPData.cpassword}
          type="password"
          id="cpassword"
          className="border border-slate-400 px-4 py-2 rounded-lg text-xl outline-none"
        />
      </label>
      <button className="hover:bg-blue-800 text-xl px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold">
        Signup
      </button>
      <span
        onClick={() => toggleForm()}
        className="text-center text-xl hover:underline cursor-pointer text-blue-700"
      >
        Already have an account?
      </span>
    </form>
  );
};

export default SignUp;
