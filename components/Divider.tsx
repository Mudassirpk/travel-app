type Props = {
  customClass: string | null;
};

const Divider: React.FC<Props> = ({ customClass }) => {
  return <div className={`h-[1px] w-full bg-blue-200 ${customClass}`}></div>;
};

export default Divider;
