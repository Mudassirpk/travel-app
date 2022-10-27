import Head from "next/head";
import Header from "../components/Header";
import Left from "../components/Home/Left/Left";
import Feed from "../components/Home/Feed/Feed";
import Right from "../components/Home/Right/Right";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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