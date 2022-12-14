import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import Header from "../../components/Header/Header";
import Left from "../../components/Home/Left/Left";
import dataContext from "../../Helper/dataContext";
import FriendsSection from "../../components/Friends/Friends";

export default function Friends() {
  const travellerData: any = useContext(dataContext);
  const { data } = travellerData;
  const { followers, following } = data;
  const [friends, setFriends] = useState<Array<object>>([]);

  useEffect(() => {
    const emailAndtoken = localStorage.getItem("tapp_eAt");
    const { token } = JSON.parse(emailAndtoken as string);
    async function fetchFriends() {
      const response = await fetch("/api/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "x-auth-token": token,
        },
        body: JSON.stringify({ friends: followers.concat(following) }),
      });
      const jsonResponse = await response.json();
      setFriends(jsonResponse);
      console.log(jsonResponse);
    }
    fetchFriends();
  }, [followers, following]);
  return data ? (
    <div>
      <Head>
        <title>TravelBook</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main className="flex">
        <Left />
        <FriendsSection friends={friends} />
      </main>
    </div>
  ) : null;
}
