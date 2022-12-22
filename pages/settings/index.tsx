import Header from "../../components/Header/Header";
import Left from "../../components/Home/Left/Left";
import ChangeProfile from "../../components/Settings/ChangeProfile";
import Divider from "../../components/Divider";
import ChangePassword from "../../components/Settings/ChangePassword";

const Settings: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex">
        <Left />
        <section className="flex-1 flex flex-col px-4 height-cal">
          <div>
            <h1 className="text-[2.4rem] font-bold text-[#0D141A]">Settings</h1>
            <Divider customClass={"my-3 bg-[#9BC3E9]"} />
          </div>
          <div className="flex w-full md:flex-col md:gap-5 justify-between flex-1 py-4">
            <ChangeProfile />
            <div className="h-full w-[1px] bg-[#9BC3E9] "></div>
            <ChangePassword />
          </div>
        </section>
      </main>
    </>
  );
};

export default Settings;
