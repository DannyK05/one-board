import { Link } from "react-router";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { email } from "zod";
import { useMutation } from "@apollo/client/react";
import { CreateUserDocument } from "../../../codegen/graphql";
import PasswordInput from "../../../components/PasswordInput";

type InputValues = {
  email: string;
  password: string;
};

export default function SignupPage() {
  const { register, handleSubmit } = useForm<InputValues>();
  const [createUser, { loading, error }] = useMutation(CreateUserDocument);

  const handleSignUp: SubmitHandler<InputValues> = async (formValues) => {
    try {
      const response = await createUser({
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
          <span>Create</span>
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
        >
          {loading ? "Loading..." : "Sign up"}
        </Button>
      </form>

      <button
        type="button"
        className="border rounded-xl bg-white my-4 py-2 px-3"
      >
        Sign up with Google
      </button>

      <p>
        Have an account ?{" "}
        <Link
          to="/"
          className="cursor-pointer hover:underline font-semibold text-[#A3D95D]"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
