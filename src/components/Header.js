import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {        
        navigate("/error");
      });
  };

  useEffect(() => {    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {        
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));   
        navigate("/browse");    
      } else {        
        dispatch(removeUser());
        navigate("/");     
      }
    });
    
    return () => unsubscribe(); // Unsubscribe from the auth state listener
  }, []);
  return (
    // <div className="px-24 w-full bg-gradient-to-b from-black absolute z-10 flex justify-between">
    <div className="px-24 w-full bg-black absolute z-10 flex justify-between">
      <img
        className="w-40"
        src={LOGO}
        alt="header"
      />
      {user && (
        <div className="flex items-center">
          <img
            alt="user-icon"
            src={user?.photoURL}
            className="w-8 h-8 mx-4"
          />
          <button
            className="font-bold text-white text-sm border p-2 rounded-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
