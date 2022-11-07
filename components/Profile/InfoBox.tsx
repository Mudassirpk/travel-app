type Props = {
  heading: string;
  content: string;
};

const InfoBox: React.FC<Props> = ({ heading, content }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-slate-800">{heading}</h1>
      <p className="text-2xl text-slate-700">{content}</p>
    </div>
  );
};

export default InfoBox;
