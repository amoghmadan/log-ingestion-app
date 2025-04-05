import { useContext, useState, useEffect } from "react";
import searchContext from "../../containers/SeachLogs/context";

const SearchBar = () => {
    const { setFilters } = useContext(searchContext);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setFilters((prevFilters) => ({
                ...prevFilters,
                search: searchQuery,
            }));
            console.log("Searching for:", searchQuery);
        }, 500);

        return () => clearTimeout(handler);
    }, [searchQuery, setFilters]);

    return (
        <form onSubmit={(e) => e.preventDefault()} className="relative w-72">
            <div className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 4.35 4.35a7.5 7.5 0 0 0 12.3 12.3z" />
                </svg>

                <input
                    type="text"
                    placeholder="Search for logs"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm"
                />

                {searchQuery && (
                    <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="text-gray-500 hover:text-red-500 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
        </form>
    );
};

export default SearchBar;
