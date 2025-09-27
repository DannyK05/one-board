import { Link } from "react-router";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import PasswordInput from "../../../components/PasswordInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client/react";
import { LoginDocument } from "../../../codegen/graphql";

type InputValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [login, { loading, error }] = useMutation(LoginDocument);
  const { register, handleSubmit } = useForm<InputValues>();

  const handleSignUp: SubmitHandler<InputValues> = async (formValues) => {
    try {
      const response = await login({
        variables: { email: formValues.email, password: formValues.password },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center flex-col  justify-center h-full">
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="flex items-center w-full space-y-4 flex-col"
      >
        <h2 className="text-4xl text-start font-semibold">
          <span>Login into</span>
          <br />
          <span>your account.</span>
        </h2>

        <Input
          type="email"
          placeholder="johndoe@email.com"
          {...register("email")}
        />

        <PasswordInput {...register("password")} />

        <Button
          type="submit"
          className="bg-[#A3D95D] shadow-md text-white py-4 w-60 font-semibold rounded-2xl"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
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
