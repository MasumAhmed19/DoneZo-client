import { Link } from "react-router-dom";
import ScrollUpBtn from "../../component/Buttons/ScrollUpBtn";

const ErrorPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
        <div className="w-[60rem] h-[60rem] bg-gradient-to-r from-[#62DF50] to-blackfilter blur-[5rem] rounded-full"></div>
      </div>

      <div className="w-full max-w-[50rem] min-h-screen flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center">
          <header className="w-full py-4 flex justify-center z-50">
            <nav>
              <Link
              to='/'
                className="text-xl font-semibold sm:text-6xl dark:text-white"
              >
                DONEZO
              </Link>
            </nav>
          </header>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-800 dark:text-white">
            404
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-neutral-400">
            Oops, something went wrong.
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-neutral-400">
            Sorry, we couldn't find your page.
          </p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">
            <ScrollUpBtn buttonText="Back to Home" link="/" />
          </div>
          <footer className="w-full py-5 text-center">
            <p className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
              © All Rights Reserved. 2022.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default ErrorPage;
