import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/auth-context";
import { House, PackageSearch, ListChecks, LogOut } from "lucide-react";

function Sidebar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("auth_token");
    auth?.setToken(null);
    navigate("/login", { replace: true });
  }

  return (
    <aside className="w-64 h-screen border-r border-r-neutral-800 text-white p-4 flex flex-col justify-between">
      <div>
        <div className="ml-2 mb-4 font-bold flex flex-row items-center">
          <img className="w-[23px] h-[23px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNCx6ZgCkZd2NAkMSZZ1b0gBZe1tYkdCiRg&s" />
          <p className="ml-2 text-neutral-100 font-normal text-sm">{auth?.company?.name}</p>
        </div>
        <nav className="flex flex-col">
          <p className="my-1 text-neutral-500 text-sm">MAIN MENU</p>
          <NavLink to="/dashboard" className={({isActive}) => `hover:bg-neutral-900 hover:text-neutral-200 my-1 py-1 px-2 rounded-md animation duration-150 ${isActive ? "bg-neutral-900 text-neutral-200" : "text-neutral-400"}`}>
            <div className="flex flex-row">
              <House />
              <p className="pl-2">Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="/products" className={({isActive}) => `hover:bg-neutral-900 hover:text-neutral-200 my-1 py-1 px-2 rounded-md animation duration-150 ${isActive ? "bg-neutral-900 text-neutral-200" : "text-neutral-400"}`}>
            <div className="flex flex-row">
              <PackageSearch />
              <p className="pl-2">Products</p>
            </div>
          </NavLink>
          <NavLink to="/orders" className={({isActive}) => `hover:bg-neutral-900 hover:text-neutral-200 my-1 py-1 px-2 rounded-md animation duration-150 ${isActive ? "bg-neutral-900 text-neutral-200" : "text-neutral-400"}`}>
            <div className="flex flex-row">
              <ListChecks />
              <p className="pl-2">Orders</p>
            </div>
          </NavLink>
        </nav>
      </div>

      <div>
        <button
          className="
            py-1
            px-2
            w-full
            my-1
            text-neutral-500
            rounded-md
            hover:bg-neutral-900 hover:text-neutral-200
            transition
            duration-150
            cursor-pointer
            flex flex-row items-center
          "
        >
        <img className="w-[23px] h-[23px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNCx6ZgCkZd2NAkMSZZ1b0gBZe1tYkdCiRg&s" />
        <p className="pl-2">Profile</p>
        </button>
        <button
          onClick={handleLogOut}
          className="
            py-1
            px-2
            w-full
            my-1
            text-neutral-500
            rounded-md
            hover:bg-neutral-900 hover:text-neutral-200
            transition
            duration-150
            cursor-pointer
            flex flex-row items-center
          "
        >
        <LogOut />
        <p className="pl-2">Log out</p>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
