import { createContext, Dispatch, SetStateAction } from "react";
import { Log } from "../../interfaces/schema";

const searchContext = createContext<{
  data: Log[];
  loading: boolean;
  filters: object;
  setFilters: Dispatch<SetStateAction<object>>;
}>({
  data: [],
  loading: false,
  filters: {},
  setFilters: () => {},
});

export default searchContext;
