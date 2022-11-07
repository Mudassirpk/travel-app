type Props = {
  children: React.ReactNode;
};

const Persons: React.FC<Props> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default Persons;
