import "../styles/globals.css";
import type { AppProps } from "next/app";
import dataContext from "../Helper/dataContext";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<object>({});
  const [feedData, setFeedData] = useState<Array<object>>([]);
  const dataSetter = (data: object, feedData: Array<object>) => {
    setData(data);
    setFeedData(feedData);
  };
  return (
    <dataContext.Provider value={{ data, dataSetter, feedData }}>
      <Component {...pageProps} />
    </dataContext.Provider>
  );
}
