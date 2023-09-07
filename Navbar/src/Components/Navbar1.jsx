import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar1 = () => {
  const [menu, setMenu] = useState(true);

  const NavLink = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Skills",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "About",
    },
    {
      id: 5,
      link: "Contacts",
    },
  ];

  return (
    <div className="flex items-center justify-between bg-black text-white w-full h-[4rem]">
      <div className="mx-3 text-xl font-bold uppercase sm:text-2xl">Logo</div>

      <ul className="hidden gap-3 mx-5 md:flex">
        {NavLink.map((link, id) => {
          return (
            <div key={id}>
              <li className="uppercase cursor-pointer ">{link.link}</li>
            </div>
          );
        })}
      </ul>

      {/* Responsive */}

      <div
        className="mx-3 md:hidden "
        onClick={() => {
          setMenu(!menu);
        }}
      >
        {menu ? (
          <GiHamburgerMenu className="text-4xl" />
        ) : (
          <AiOutlineClose className="text-4xl" />
        )}

        {!menu && (
          <ul className="bg-blue-400 absolute top-[4rem] left-0 h-screen text-center w-[50%] ">
            {NavLink.map((link, id) => {
              return (
                <div key={id}>
                  <li className="uppercase cursor-pointer text-xl font-bold my-[2rem]">
                    {link.link}
                  </li>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar1;
