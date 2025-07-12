import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUGGESTED_LANGUAGES } from "../utils/constants";
import { clearGptStore, toggleGPTSearchView } from "../utils/gptSearchSlice";
import { changeLanguage } from "../utils/configSlice";
import { clearWatchingDetails } from "../utils/moviesSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const isWatchingMovie = useSelector((store) => store.movies.isWatchingMovie);
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
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Unsubscribe from the auth state listener
  }, []);

  const handleGPTSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGPTSearchView());
    !showGPTSearch && dispatch(clearGptStore());
    isWatchingMovie && dispatch(clearWatchingDetails());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="sm:px-4 md:px-20 w-full bg-gradient-to-b from-black absolute z-10 flex flex-col sm:flex-row md:flex-row items-center justify-between text-nowrap">
      {/*<div className="px-24 w-full bg-black absolute z-10 flex justify-between"> */}
      <img className="w-40" src={LOGO} alt="header" />
      {user && (
        <div className="flex items-center">
          {showGPTSearch && (
            <select
              className="p-2 px-4 mx-4 rounded-lg border text-sm"
              onChange={handleLanguageChange}
            >
              {SUGGESTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.label}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 px-4 mx-4 rounded-lg border text-white text-sm"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "Home Page" : "GPT Search"}
          </button>
          <img alt="user-icon" src={user?.photoURL} className="w-8 h-8 mx-4" />
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
