import SignUpForm from "@/components/auth/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="form-title">Sign Up & Personalize</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
