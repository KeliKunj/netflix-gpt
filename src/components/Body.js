import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from "../utils/userSlice"
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    // Whenever there is a change in the authentication state, this will be called
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign in or sign up
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));   
        // navigate("/browse");     from other place
      } else {
        // signed out
        dispatch(removeUser());
        // navigate("/");     from other place
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
