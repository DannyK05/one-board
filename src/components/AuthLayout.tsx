import { ReactNode } from "react";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/images/teacher_illustration.png)",
        backgroundPosition: "top",
        height: "100vh",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      }}
    >
      <div className="h-full rounded-2xl flex items-center space-y-4 flex-col shadow-xl py-4 px-2 w-2/5 bg-white">
        <img
          src="/assets/images/logo.png"
          width={200}
          height={200}
          alt="Logo"
        />
        <Outlet />
      </div>
    </div>
  );
}
