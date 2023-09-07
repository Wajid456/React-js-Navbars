import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar2 = () => {
  const [nav, setNave] = useState(true);

  return (
    <div className=" flex  justify-between bg-[red] h-[4rem] text-white">
      <div className="mx-4 my-3.5 sm:text-2xl text-xl sm:font-bold md:block hidden">
        LOGO
      </div>

      <div className="mx-2 my-3 md:my-3">
        <input
          className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Search Here..."
        />

        <button
          type="button"
          className="px-2 py-1 mx-2 text-white transition duration-300 ease-in-out rounded-full shadow-md md:px-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg "
        >
          Search
        </button>
      </div>

      <ul className="hidden gap-4 m-5 uppercase cursor-pointer md:flex md:font-bold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Responsive */}

      <div
        className="md:hidden"
        onClick={() => {
          setNave(!nav);
        }}
      >
        {nav ? (
          <GiHamburgerMenu className="mx-3 my-3 text-4xl" />
        ) : (
          <AiOutlineClose className="mx-3 my-4 text-3xl md:text-4xl" />
        )}

        {!nav && (
          <ul className="bg-black absolute top-[4rem] left-0 h-screen text-center w-[100%] duration-500">
            <li className="uppercase cursor-pointer text-xl  my-[2rem]">
              <Link to="/">Home</Link>
            </li>
            <li className="uppercase cursor-pointer text-xl  my-[2rem]">
              <Link to="/services">Services</Link>
            </li>
            <li className="uppercase cursor-pointer text-xl  my-[2rem]">
              <Link to="/about">About</Link>
            </li>
            <li className="uppercase cursor-pointer text-xl  my-[2rem]">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
