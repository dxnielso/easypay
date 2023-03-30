// Iconos
import { FaSearch } from "react-icons/fa";

const BigInputSearch = ({placeholder, handlerChange}) => {
  return (
    <div className="relative flex items-center mb-14">
      <FaSearch className="absolute left-8 text-gray-700 text-xl" />
      <input
        type="text"
        name=""
        id=""
        placeholder={placeholder}
        className="text-xl pl-16 pr-10 py-4 rounded-full w-full shadow-md outline-none border"
        onChange={handlerChange}
      />
    </div>
  );
};

export default BigInputSearch;
