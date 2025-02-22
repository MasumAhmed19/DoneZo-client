import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollUpBtn from "../../component/Buttons/ScrollUpBtn";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hook/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-6 sm:px-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[60rem] h-[60rem] bg-gradient-to-r from-[#62DF50] to-black opacity-30 blur-[5rem] rounded-full"></div>
      </div>

      {/* <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Sign in to Continue
          </h2>
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition-all duration-300">
            <FcGoogle
              size={28}
              className="mr-3"
            />
            <li
              className="cursor-pointer"
              onClick={() => handleLogin()}
            >
              login with google
            </li>
          </button>
        </div>
      </div> */}
      <div className="min-h-screen flex items-center justify-center relative z-10 ">
        <div className="backdrop-blur-lg bg-white/10  p-8 rounded-2xl shadow-xl w-96 text-center ">
          <header className="w-full py-4 flex justify-center z-50">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-3xl dark:text-white"
              >
                DONEZO
              </Link>
              <p className="text-white">Get things done in style</p>
            </nav>
          </header>
          <h2 className="text-3xl font-semibold mb-6 text-gray-200">
            Sign in to Continue
          </h2>

          <button className="flex items-center justify-center w-full bg-white py-2 rounded-md  transition-all duration-300">
            <FcGoogle
              size={28}
              className="mr-3"
            />
            <li
              className="cursor-pointer"
              onClick={() => handleLogin()}
            >
              Login with Google
            </li>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
