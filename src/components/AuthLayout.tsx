import { ReactNode } from "react";

type AuthLayoutTypeProps = { children: ReactNode };

export default function AuthLayout({ children }: AuthLayoutTypeProps) {
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
      <div className="h-full rounded-2xl flex items-center space-y-8 flex-col shadow-xl py-4 px-2 w-2/5 bg-white">
        <h1 className="text-4xl">
          <span className="font-semibold text-[#A3D95D]">One</span>board
        </h1>

        {children}
      </div>
    </div>
  );
}
