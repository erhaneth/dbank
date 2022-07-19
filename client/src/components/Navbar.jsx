import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import logo from ".//../images/dbank.png";
const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex md:justify-center bg-[#646464] justify-between items-center py-auto">
      <div className="flex justify-between items-center w-full h-full px-2 xl:px-16">
        <img src={logo} alt="/" className="cursor-pointer" width="160" height="80" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row font-bold justify-between items-center flex-initial ">
        {/* map items and pass to navbar */}
        {["Transactions", "Wallet"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#353396]  text-white py-2 px-6 rounded-2xl hover:bg-[#5867b2]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggle && (
          <HiMenuAlt4
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggle(true)}
          />
        )}
        {toggle && (
          <AiOutlineClose
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggle(false)}
          />
        )}
        {toggle && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen bg-gray-200 shadow-lg md:hidden list-none flex flex-col justify-start items-end blue-glassmorphism">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggle(false)} />
            </li>
            {["Transactions", "Wallets"].map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item}
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
export default NavBar;
