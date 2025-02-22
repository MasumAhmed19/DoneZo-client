import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import ScrollUpBtn from "../Buttons/ScrollUpBtn";

const Header = () => {
  const { user, logOut, signInWithGoogle } = useAuth();

  const menu = (
    <>
      <li>
        <ScrollUpBtn buttonText="Add Task" link="/dashboard" />
      </li>
      <li onClick={logOut}>
        <ScrollUpBtn buttonText="Logout" link="/" />
      </li>
    </>
  );

  return (
    <div className="relative bg-black py-5 overflow-hidden">

      {/* Navbar */}
      <div className="container mx-auto relative z-10">
        <div className="navbar flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex-1">
            <Link to="/" className="text-2xl font-semibold text-gray-900 dark:text-white">
              DoneZO
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 flex gap-4">
              {user ? (
                menu
              ) : (
                <li onClick={signInWithGoogle}>
                  <ScrollUpBtn buttonText="Login" link="/dashboard" />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
