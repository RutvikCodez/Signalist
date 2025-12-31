import SignInForm from "@/components/auth/SignInForm";

const SignIn = () => {
  return (
    <div className="flex flex-col">
      <h1 className="form-title">Welcome back</h1>
      <SignInForm />
    </div>
  );
};

export default SignIn;
