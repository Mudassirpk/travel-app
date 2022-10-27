import Image from "next/image";

const LeftItem: React.FC = () => {
  return (
    <div>
      <div className="relative rounded-[50%] overflow-hidden w-[50px] h-[50px]">
        <Image
          alt="user / you"
          src="/images/user.jpg"
          fill={true}
          object-fit="cover"
        />
      </div>
    </div>
  );
};

export default LeftItem;
