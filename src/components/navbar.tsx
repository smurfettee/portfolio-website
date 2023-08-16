import Link from "./ReactScroll";
import { Dispatch, SetStateAction } from 'react';

interface props {
    setVisible : Dispatch<SetStateAction<string>>;
    width: string
}

export default function Navbar(props:props) {

    return (
        <div className="flex w-full bg-white justify-between shadow-md [&>div]:m-8 items-center fixed top-0">
            <div className="text-[rgb(49,50,54)] text-2xl font-semibold">Ege.dev</div>
            <div onClick={() => {props.setVisible(""); }} className="text-[rgb(49,50,54)] cursor-pointer text-2xl font-semibold md:hidden">&#9776;</div>
            <div className="hidden md:flex md:gap-5 [&>a]:cursor-pointer text-lg font-bold text-gray-700">
                <Link className="hover:text-blue-600 duration-200"  to="home" onClick={() => {props.setVisible("hidden")}} smooth={true} duration={1000}>Home</Link>
                <Link className="hover:text-blue-600 duration-200" offset={-50} to="about" onClick={() => {props.setVisible("hidden")}} smooth={true} duration={1000}>About</Link>
                <Link className="hover:text-blue-600 duration-200" offset={-150} to="projects" onClick={() => {props.setVisible("hidden")}} smooth={true} duration={1000}>Projects</Link>
                <Link className="hover:text-blue-600 duration-200" to="contact" onClick={() => {props.setVisible("hidden")}} smooth={true} duration={1000}>Contact</Link>
            </div>
        </div>
    );
}