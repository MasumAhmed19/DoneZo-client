import { Link } from "react-router-dom";

const ScrollUpBtn = ({ buttonText, link }) => {
  return (
    <>
      <Link to={link} className="group relative py-2 rounded-md px-5 bg-[#62DF50] text-neutral-950 uppercase text-[12px] md:text-[14px] tracking-widest">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 transition duration-200 group-hover:-translate-y-[150%]">
            {buttonText || "Login"}
          </div>
          <div className="absolute translate-y-[120%] transition duration-200 group-hover:translate-y-0">
            {buttonText || "Login"}
          </div>
        </span>
      </Link>
    </>
  );
};



export default ScrollUpBtn;
