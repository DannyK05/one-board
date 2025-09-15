import { Link } from "react-router";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function LoginPage() {
  return (
    <div className="flex items-center flex-col  justify-center h-full">
      <form className="flex items-center w-full space-y-4 flex-col">
        <h2 className="text-4xl text-start font-semibold">
          <span>Login into</span>
          <br />
          <span>your account.</span>
        </h2>

        <Input
          className="w-60 py-2 rounded-2xl border px-3"
          type="email"
          name="userMail"
          placeholder="johndoe@email.com"
        />

        <Input
          className="w-60 py-2 rounded-2xl border px-3"
          type="password"
          name="userPassword"
          placeholder="Password"
        />

        <Button
          type="submit"
          className="bg-[#A3D95D] shadow-md text-white py-4 w-60 font-semibold rounded-2xl"
        >
          Login
        </Button>
      </form>

      <button
        type="button"
        className="border rounded-xl bg-white my-4 py-2 px-3"
      >
        Continue with Google
      </button>

      <p>
        Don't have an account ?{" "}
        <Link
          to="/register"
          className="cursor-pointer hover:underline font-semibold text-[#A3D95D]"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
