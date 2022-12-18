import "../styles/globals.css";
import type { AppProps } from "next/app";
import dataContext from "../Helper/dataContext";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<object>({});
  const [feedData, setFeedData] = useState<Array<object>>([]);
  const [sidebar, setSidebar] = useState<boolean>(false);
  const dataSetter = (
    data: object,
    newFeedData: Array<object>,
    newPost: object,
    which: string
  ) => {
    if (!which) {
      setData(data);
      setFeedData(newFeedData);
    } else {
      if (which === "traveller") {
        setData(data);
      } else if (which === "feed") {
        setFeedData([newPost, ...feedData]);
        setFeedData(feedData);
      }
    }
  };

  function sidebarToggler() {
    setSidebar(!sidebar);
  }
  return (
    <dataContext.Provider
      value={{ data, dataSetter, feedData, sidebarToggler, sidebar }}
    >
      <Component {...pageProps} />
    </dataContext.Provider>
  );
}
