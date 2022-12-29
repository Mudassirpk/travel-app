import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./../styles/loader.module.css";

type Props = {
  size: number;
  wait: boolean;
  fill: boolean;
};

const Loader: React.FC<Props> = ({ size, wait, fill }) => {
  return (
    <div
      className={`${
        fill ? "w-full" : "mx-4"
      }  py-4 flex items-center justify-center`}
    >
      {wait ? (
        <p className="text-2xl bg-slate-800 mr-4 text-center">Please wait...</p>
      ) : null}

      <AiOutlineLoading3Quarters
        className={styles.loader}
        style={{
          fontSize: `${size}rem`,
        }}
      />
    </div>
  );
};

export default Loader;
