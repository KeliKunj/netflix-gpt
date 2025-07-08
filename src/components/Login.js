import React from "react";
import Header from "./Header";
import checkFormValidationData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const name = React.useRef(null);
  const email = React.useRef(null);
  const password = React.useRef(null);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();   
    const message = checkFormValidationData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);   

    if (message) return;
    // Sign In / Sign Up Logic
    if (!isSignInForm) {      
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {          
          const user = userCredential.user;          
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:USER_AVATAR,
          })
            .then(() => {
              // const { uid, email, displayName, photoURL } = user; // Not updated user value
              const { uid, email, displayName, photoURL } = auth.currentUser; // use auth= getAuth()
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));              
            })
            .catch((error) => {              
              setErrorMessage(error,message);
            });          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    } else {      
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {          
          const user = userCredential.user;          
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
          alt="background"
        />
      </div>
      <form className="flex flex-col absolute bg-black my-32 mx-auto right-0 left-0 p-10 w-4/12 text-white rounded-lg text-sm bg-opacity-80">
        <h1 className="font-bold text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your Full Name"
            className="bg-gray-700 my-4 p-4 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your Email Id"
          className="bg-gray-700 my-4 p-4 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter your Password"
          className="bg-gray-700 my-4 p-4 rounded-sm"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="submit"
          className="p-4 rounded-md bg-red-700 my-4"
          onClick={(e) => handleSubmit(e)}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="">
          {isSignInForm ? "New to Netflix? " : "Already registered user? "}
          <span
            className="underline text-blue-600 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
