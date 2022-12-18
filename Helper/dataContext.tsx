import { createContext } from "react";

type Props = {
  children: any;
};

export type dataTypes = {
  dataSetter: Function;
  data: object | null;
  feedData: Array<object> | null;
  sidebarToggler: Function;
  sidebar: boolean;
};
const dataContext = createContext<dataTypes | null>(null);

export default dataContext;
