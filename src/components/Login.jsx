import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  console.log(isSignInForm);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="logo"
        />
      </div>
      <div className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80">
        <form className="p-12 bg-black text-white">
          <h1 className="font-bold text-2xl text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="p-2 m-2 bg-gray-300 w-full text-black"
            />
          )}

          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="p-2 m-2 bg-gray-300 w-full text-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="false"
            className="p-2 m-2 bg-gray-300 w-full text-black"
          />
          <button className="p-2 m-2 bg-red-600 w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className=" m-2 text-center cursor-pointer"
            onClick={() => toggleSignInForm()}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up now"
              : "Already registered! Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
