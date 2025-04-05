import SearchBar from "../SearchBar";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container flex items-center px-4">
                <a href="/" className="text-2xl font-bold text-gray-800">
                    Query Interface
                </a>
                <div className="flex-1 ml-12 max-w-lg">
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
