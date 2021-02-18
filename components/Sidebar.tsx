import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const Sidebar = () => {
  return (
    <>
      <img
        src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/84334845_2709290712459828_345296666015825920_o.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_ohc=RGuDAkRpV84AX8K1K_Z&_nc_ht=scontent-sea1-1.xx&oh=a5d39abfbff8ae9766d5937c7a593c42&oe=60553405"
        alt="avatar"
        className="w-32 h-32 mx-auto border rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-blue-900 ">Tuan</span> Phan
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500">
        Software Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-900 md:w-full ">
        <a href="https://www.linkedin.com/in/tphan235/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/tuanphan23">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Seattle,Washington </span>
        </div>
        <p className="my-2 "> tuan.ph235@gmail.com </p>
        <p className="my-2"> (206) 488-7112 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-blue-900 to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:tuan.ph235@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={() => {}}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-blue-900 to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </>
  );
};

export default Sidebar;
