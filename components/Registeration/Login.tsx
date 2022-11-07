import { useState } from "react";
import { useRouter } from "next/router";
type Props = {
  toggleForm: Function;
};

type formType = {
  email: string;
  password: string;
};
const Login: React.FC<Props> = ({ toggleForm }) => {
  const router = useRouter();
  const [isValidCredentials, setIsValidCredentials] = useState<boolean>(true);
  const [loginData, setLoginData] = useState<formType>({
    email: "",
    password: "",
  });

  function fillLoginData(e: React.SyntheticEvent) {
    const target = e.target as HTMLTextAreaElement;

    setLoginData({ ...loginData, [target.id]: target.value });
  }

  async function submitLoginForm(e: React.SyntheticEvent) {
    e.preventDefault();
    const response = await fetch("/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(loginData),
    });
    const jsonResponse = await response.json();
    if (response.status === 200) {
      localStorage.setItem("tapp_eAt", JSON.stringify(jsonResponse));
      router.push("/home");
    } else if (response.status === 404) {
      setIsValidCredentials(false);
    }
  }

  return (
    <form onSubmit={submitLoginForm} className="flex flex-col gap-3">
      <h1 className="text-3xl mb-4 text-slate-800 font-semibold text-center">
        Login
      </h1>
      <label htmlFor="email" className="text-xl flex flex-col gap-3">
        Email
        <input
          required
          onChange={fillLoginData}
          value={loginData.email}
          className="border border-slate-400 px-4 py-2 rounded-lg text-2xl outline-none"
          placeholder="example@gmail.com"
          type="email"
          id="email"
        />
      </label>
      <label
        htmlFor="password"
        className="text-xl font-semibold flex flex-col gap-3"
      >
        Password
        <input
          required
          onChange={fillLoginData}
          value={loginData.password}
          className="text-2xl border border-slate-400 px-4 py-2 rounded-lg outline-none"
          placeholder="......"
          type="password"
          id="password"
        />
      </label>
      {!isValidCredentials ? (
        <p className="text-2xl text-red-500 mx-4">
          ** Invalid <strong>email</strong> or <strong>passsword</strong>
        </p>
      ) : null}
      <button
        type="submit"
        className="hover:bg-blue-800 text-xl px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold"
      >
        Login
      </button>
      <span
        onClick={() => toggleForm()}
        className="text-center text-2xl hover:underline cursor-pointer text-blue-700"
      >
        Don&apos;t have an account?
      </span>
    </form>
  );
};

export default Login;
