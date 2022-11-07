import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type Props = {
  children: any;
};

type dataTypes = {
  dataSetter: Function;
  data: object | null;
};

export const dataContext = createContext<dataTypes | null>(null);

const DataProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<object | null>(null);

  function dataSetter(data: object) {
    setData(data);
  }

  return (
    <dataContext.Provider value={{ dataSetter, data }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
