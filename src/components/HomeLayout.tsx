import { Link, NavLink, Outlet } from "react-router";

export default function HomeLayout() {
  const tabs = [
    { name: "Boards", path: "/home/boards" },
    { name: "Schedule", path: "/home/schedule" },
    { name: "Profile", path: "/home/profile" },
    { name: "Settings", path: "/home/settings" },
  ];
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center space-y-10 shadow-lg bg-[#A3D95D] w-1/5 py-2 h-[100vh]">
        <img
          src="/assets/images/logo.png"
          width={200}
          height={200}
          alt="Logo"
        />
        <div className="flex flex-col items-end space-y-4 pl-2 w-full">
          {tabs.map(({ name, path }) => (
            <NavLink
              key={name}
              className={({ isActive }) =>
                `${
                  isActive &&
                  "bg-white font-bold text-[#1D4E39] border border-[#1D4E39]"
                } px-4 py-6 bg-[#1D4E39] cursor-pointer duration-500 ease-in-out active:text-[#0E0721] active:bg-white lg:hover:shadow-lg lg:hover:py-8 text-white rounded-l-xl w-full`
              }
              to={path}
            >
              {name}
            </NavLink>
          ))}
        </div>
        <div>
          <p>John Doe</p>
          <Link className="lg:hover:underline active:font-bold" to="/">
            Log Out
          </Link>
        </div>
      </div>
      <div className="w-4/5 pt-4 h-[100vh] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
