import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/Validate.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-2 bg-black text-white"
        >
          <h1 className="font-bold text-2xl text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="p-2 m-2 bg-gray-300 w-full text-black"
            />
          )}

          <input
            ref={email}
            type="text"
            name="email"
            placeholder="Email Address"
            className="p-2 m-2 bg-gray-300 w-full text-black"
          />
          <input
            ref={password}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="false"
            className="p-2 m-2 bg-gray-300 w-full text-black"
          />
          <p className="p-2 text-red-500 font-bold text-lg">{errorMessage}</p>
          <button
            className="p-2 m-2 bg-red-600 w-full"
            onClick={handleButtonClick}
          >
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
