import { useState, useContext } from "react";
import Loader from "../../Helper/Loader";
type passwordTypes = {
  old_password: string;
  new_password: string;
  id: string;
};

import dataContext from "../../Helper/dataContext";

const ChangePassword: React.FC = () => {
  const traveller: any = useContext(dataContext);
  const { data } = traveller;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [warning, setWarning] = useState({
    state: false,
    text: "",
    input_state: "1px solid #2E3236",
    success: false,
  });
  const [values, setValues] = useState<passwordTypes>({
    old_password: "",
    new_password: "",
    id: data._id,
  });

  function fill_values(e: React.SyntheticEvent) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    const id = target.id;
    const value = target.value;

    setValues({ ...values, [id]: value });
  }

  async function submitChanges(e: React.SyntheticEvent) {
    e.preventDefault();
    if (values.old_password === values.new_password) {
      setWarning({
        state: true,
        text: "** Old password cannot be the new password",
        input_state: "1px solid maroon",
        success: false,
      });
    } else {
      const { token } = JSON.parse(localStorage.getItem("tapp_eAt") as string);
      if (token) {
        const response = await fetch("/api/settings/changepassword", {
          method: "post",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "x-auth-token": token,
          },
          body: JSON.stringify(values),
        });
        const jsonResponse = await response.json();
        if (response.status === 201) {
          setIsLoading(false);
          setWarning({
            state: true,
            text: jsonResponse.messege,
            input_state: "1px solid #2E3236",
            success: true,
          });
          setValues({
            old_password: "",
            new_password: "",
            id: data._id,
          });
        } else if (response.status === 400) {
          setIsLoading(false);
          setWarning({
            state: true,
            text: jsonResponse.messege,
            input_state: "1px solid maroon",
            success: false,
          });
        }
      } else {
        setIsLoading(false);
        setWarning({
          state: true,
          text: "** Your are un-authorized",
          input_state: "1px solid maroon",
          success: false,
        });
      }
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full">
      <h1 className="text-[#0D141A] text-[2rem] font-semibold text-center">
        Change Password
      </h1>
      <form
        onSubmit={submitChanges}
        className="w-full gap-[1.7rem] px-[2rem] flex flex-col items-center py-[1rem]"
      >
        <label
          htmlFor="old_password"
          className="flex text-[1.6rem] w-full font-medium flex-col gap-[.5rem] text-[#2E3236]"
        >
          Old Password
          <input
            value={values.old_password}
            onChange={fill_values}
            type="password"
            id="old_password"
            className="border px-2 py-1 outline-none rounded-lg"
            style={{
              border: warning.input_state,
            }}
          />
        </label>
        <label
          htmlFor="new_password"
          className="flex text-[1.6rem] w-full font-medium flex-col gap-[.5rem] text-[#2E3236]"
        >
          New Password
          <input
            style={{
              border: warning.input_state,
            }}
            onChange={fill_values}
            value={values.new_password}
            type="password"
            id="new_password"
            className="border px-2 py-1 outline-none border-[#2E3236] rounded-lg"
          />
        </label>
        {isLoading ? <Loader size={2} /> : null}
        {warning.state ? (
          <p
            className="text-2xl"
            style={{
              color: warning.success ? "green" : "maroon",
            }}
          >
            {warning.text}
          </p>
        ) : null}
        <button
          type="submit"
          className="text-[1.6rem] bg-blue-900 text-white text-normal py-2 px-4 hover:bg-blue-700 rounded-lg"
        >
          Change password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
