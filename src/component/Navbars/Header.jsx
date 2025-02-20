import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import ScrollUpBtn from "../Buttons/ScrollUpBtn";

const Header = () => {
  const { user, logOut, signInWithGoogle, loading } = useAuth();
  const menu = (
    <>
      <li>
        <ScrollUpBtn
          buttonText="Add Task"
          link="/dashboard"
        />
      </li>
      <li onClick={logOut}>
        <ScrollUpBtn
          buttonText="Logout"
          link="/"
        />
      </li>
    </>
  );

  

  return (
    <div>
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="flex-1">
            <a className="text-xl">DoneZO</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 flex gap-4">
              {user ? (
                menu // Use `menu` directly here without curly braces
              ) : (
                <li onClick={signInWithGoogle}>
                  <ScrollUpBtn
                    buttonText="Login"
                    link="/dashboard"
                  />
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
