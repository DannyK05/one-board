import { boards } from "./data";

export default function HomePage() {
  const tabs = [
    { name: "Boards" },
    { name: "Schedule" },
    { name: "Profile" },
    { name: "Settings" },
  ];
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center space-y-10 shadow-lg border-r border-[#1D4E39] bg-[#A3D95D] w-1/5 py-2 h-[100vh]">
        <img
          src="/assets/images/logo.png"
          width={200}
          height={200}
          alt="Logo"
        />
        <div className="flex flex-col items-end space-y-4 pl-2 w-full">
          {tabs.map(({ name }) => (
            <div className="px-4 py-6 bg-[#1D4E39] cursor-pointer active:text-[#0E0721] active:bg-white hover:shadow-lg hover:py-8 text-white rounded-l-xl w-full">
              {name}
            </div>
          ))}
        </div>
        <div>
          <p>John Doe</p>
          <span>Log Out</span>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6 overflow-y-auto justify-center w-4/5 h-[100vh]">
        {boards.map(({ subject, lecturer, count }) => (
          <div className="bg-[#F5F4BC] text-[#0E0721] shadow-lg border flex rounded-xl px-4 py-8 flex-col space-y-2 w-3/5 items-center">
            <h2 className="font-bold text-3xl">{subject}</h2>
            <div className="flex w-full items-center justify-between">
              <p>{lecturer}</p>
              <span>{count} participants</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
