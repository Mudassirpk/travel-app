import Head from "next/head";
import Header from "../../components/Header/Header";
import { useEffect, useState, useContext } from "react";
import Left from "../../components/Home/Left/Left";
import Feed from "../../components/Home/Feed/Feed";
import Right from "../../components/Home/Right/Right";
import dataContext from "../../Helper/dataContext";
import { useRouter } from "next/router";

export default function Home() {
  const travlerData: any = useContext(dataContext);
  const { dataSetter } = travlerData;
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    async function getUser() {
      const emailAndToken = localStorage.getItem("tapp_eAt") as string;
      if (emailAndToken) {
        const response = await fetch("/api/home", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: emailAndToken,
        });

        if (response.status === 200) {
          const traveler: any = await response.json();
          dataSetter(traveler.foundTraveler, traveler.feedData);
          setUserName(traveler.foundTraveler.name);
        } else if (response.status === 404) {
          localStorage.removeItem("tapp_eAt");
          router.push("/");
        }
      }
    }

    getUser();
  }, []);

  return (
    <div>
      <Head>
        <title>TravelBook - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Left />
        <Feed />
        <Right />
      </main>
    </div>
  );
}
