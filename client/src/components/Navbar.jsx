import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";


import logo from ".//../images/dbank.png";
const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )

}

function NavBar() {
    return (
     <nav className="w-full flex md:justify-center bg-white">
        <div className="md:flex[0.5] flex-initial justify-center"> 
         <img  src={logo} alt="logo" className="h-36 w-48 cursor-pointer" />
        </div>
        <ul className="text-gray md:flex hidden flex-row  justify-between items-center flex-initial ">
            <NavbarItem />
        </ul>
     </nav>
    )
}
export default NavBar;
