type Props = {
  option: string;
  id: string;
};

const SelectItem: React.FC<Props> = ({ option, id }) => {
  return (
    <p
      className={`radio-label text-center text-gray-800 px-[10px] cursor-pointer hover:text-gray-700 text-[16px]`}
      id={id}
    >
      {option}
    </p>
  );
};

export default SelectItem;
