import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="flex flex-row place-content-between items-end w-full py-16 text-gray-400">
      <Link to="/">
        <p className="text-4xl cursor-pointer hover:text-teal-700 transition-all ease-in-out duration-300">
          The React Blog
        </p>
      </Link>
      <div className="flex">
        <Link to="/">
          <p
            className={`text-lg mx-2 ${
              location.pathname === "/" && "text-teal-600"
            }`}
          >
            Home
          </p>
        </Link>
        <Link to="/create">
          <p
            className={`text-lg mx-2 ${
              location.pathname === "/create" && "text-teal-600"
            }`}
          >
            Create post
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
