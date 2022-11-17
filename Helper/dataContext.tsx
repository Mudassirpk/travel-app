import {
  createContext,
} from "react";

type Props = {
  children: any;
};

export type dataTypes = {
  dataSetter: Function;
  data: object | null;
};
const dataContext = createContext<dataTypes | null>(null);

export default dataContext;


