import "../styles/globals.css";
import type { AppProps } from "next/app";
import dataContext from "../Helper/dataContext";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<object>({});
  const dataSetter = (data: object) => {
    setData(data);
  };
  console.log(data)
  return (
    <dataContext.Provider value={{data,dataSetter}}>
      <Component {...pageProps} />
    </dataContext.Provider>
  );
}
