export default function LoginPage() {
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
      <div className="h-4/5 rounded-2xl flex items-center space-y-8 flex-col shadow-xl py-4 px-2 w-1/2 bg-white">
        <h1 className="text-4xl">
          <span className="font-semibold text-[#A3D95D]">One</span>board
        </h1>

        <div className="flex items-center flex-col  justify-center h-full">
          <form className="flex items-center  space-y-4 flex-col">
            <h2 className="text-4xl text-start font-semibold">
              <span>Login into</span>
              <br />
              <span>your account.</span>
            </h2>

            <input
              className="w-60 py-2 rounded-2xl border px-3"
              type="email"
              name="userMail"
              placeholder="johndoe@email.com"
            />

            <input
              className="w-60 py-2 rounded-2xl border px-3"
              type="password"
              name="userPassword"
              placeholder="Password"
            />

            <button
              type="submit"
              className="bg-[#A3D95D] shadow-md text-white py-4 w-60 font-semibold rounded-2xl"
            >
              Login
            </button>
          </form>

          <button
            type="button"
            className="border rounded-xl bg-white my-4 py-2 px-3"
          >
            Continue with Google
          </button>

          <p>
            Have an account ?{" "}
            <span className="font-semibold text-[#A3D95D]">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
