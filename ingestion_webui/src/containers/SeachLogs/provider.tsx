import searchContext from "./context";
import useLog from "../../hooks/useLog";
import { Props } from "./types";

const SearchProvider = (props: Props) => {
    const { data, loading, filters, setFilters } = useLog();
    return (
        <searchContext.Provider value={{ data, loading, filters, setFilters }}>
            {props.children}
        </searchContext.Provider>
    );
};

export default SearchProvider;
