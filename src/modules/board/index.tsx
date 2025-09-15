import { boards } from "./data";

export default function Boards() {
  return (
    <div className="flex flex-col items-center space-y-6  justify-center w-full">
      {boards.map(({ subject, lecturer, count }) => (
        <div className="bg-[#F5F4BC]  text-[#0E0721] shadow-lg border flex rounded-xl px-4 py-8 flex-col space-y-2 w-3/5 items-center">
          <h2 className="font-bold text-3xl">{subject}</h2>
          <div className="flex w-full items-center justify-between">
            <p>{lecturer}</p>
            <span>{count} participants</span>
          </div>
        </div>
      ))}
    </div>
  );
}
