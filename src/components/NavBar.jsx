import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row justify-around items-center p-4 bg-[#ae9cff] text-white">
        <div>
          <Link to="/">Dictionary</Link>
        </div>
        <ul className="flex flex-row justify-between w-[30rem] ml-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
