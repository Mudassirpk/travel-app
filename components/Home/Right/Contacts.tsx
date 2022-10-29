import Contact from "./Contact";

const Contacts: React.FC = () => {
  return (
    <div className="px-4 flex-1 w-full">
      <h1 className="text-3xl font-semibold text-slate-800 my-5">Contacts</h1>
      <div className="w-full flex flex-col gap-3 contacts">
        <Contact name="Mskhan" />
        <Contact name="Arhad bin Salaman Rizwi" />
      </div>
    </div>
  );
};

export default Contacts;
