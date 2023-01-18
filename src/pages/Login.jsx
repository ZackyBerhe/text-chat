import React from "react";
import Input from "../components/Input";

const Login = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        {/* Main Form Container  */}
        <div className="w-1/3 shadow-2xl flex flex-col items-center h-max py-6 px-10">
          <p className="text-primary text-2xl font-semibold">Signup</p>

          <form action="" className="w-full flex flex-col gap-6 py-6">
            <Input
              type="email"
              id="11"
              label="Email Address"
              labelFor="EmailAddress"
            />
            <Input
              type="password"
              id="12"
              label="Password"
              labelFor="Password"
            />

            <div className="pb-1 bg-primary/50 hover:pb-0 transition-all duration-200 ease-out">
              <button className="w-full py-3 font-semibold bg-primary text-white">
                Signup
              </button>
            </div>
            <p className="w-full">
              Already have an account? <b className="text-primary">login</b>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
