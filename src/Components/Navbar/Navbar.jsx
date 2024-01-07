import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <h1 className="font-bold text-3xl">pti.</h1>
      </div>
      <div className="navbar-center lg:flex ">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-white lg:w-[450px]"
            />
          </li>
          <li>
            <details>
              <summary className="font-bold bg-white ml-5 py-[14px] px-[48px]">MENU</summary>
              <ul className="p-2">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Details</a>
                </li>
                <li>
                  <a>Category</a>
                </li>
                <li>
                  <a>My Favorites</a>
                </li>
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Login/Sign Up</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="hidden lg:block">
        <FontAwesomeIcon
          style={{ fontSize: "25px" }}
          className="bg-[#F95724] text-white p-2 rounded-full "
          icon={faUser}
        />
      </div>
    
    </div>
  );
};

export default Navbar;
