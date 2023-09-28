import { FaStoreAlt } from "react-icons/fa";
import SearchForm from "./SearchForm";
import Account from "./Account";

const AppBar = () => {
  return (
    <header className="py-4 bg-secondary text-white">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
        {/* Brand */}
        <Brand />
        {/* Seatch */}
        <SearchForm />
        {/* Account */}
        <Account />
      </div>
    </header>
  );
};

function Brand() {
  return (
    <h1 className="flex items-center mb-8 md:mb-0">
      <FaStoreAlt className="text-3xl fill-primary mr-3" />
      E-Shop
    </h1>
  );
}

export default AppBar;
