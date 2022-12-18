import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./../styles/loader.module.css";

type Props = {
    size:number
}

const Loader:React.FC<Props> = ({size}) => {
  return (
    <div className="w-full py-4 flex items-center justify-center">
      <AiOutlineLoading3Quarters className={styles.loader} style={{
        fontSize:`${size}rem`
      }} />
    </div>
  );
};

export default Loader;
