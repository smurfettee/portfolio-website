import { isVisible } from "@testing-library/user-event/dist/utils";
import Link from "./ReactScroll";
import { Dispatch, SetStateAction } from 'react';

interface props {
    setVisible : Dispatch<SetStateAction<string>>;
    width: string
}

export default function SideNavbar(props:props) {

    const {width} = props;

    return (
        <div id="slide_navbar" className={`h-screen w-screen fixed bg-white text-2xl font-semibold top-0 ${width}`}>
            <div className="h-1/5 flex justify-end items-start"><div className="cursor-pointer m-8 text-3xl" onClick={() => {props.setVisible("hidden");}}>&#9747;</div></div>
            <div className="h-4/5 flex flex-col items-center justify-center [&>a]:m-5">
                <Link to="home" onClick={() => {props.setVisible("hidden")}} smooth={true} duration={1000}>Home</Link>
                <Link to="about" onClick={() => {props.setVisible("hidden")}} smooth={true} duration={1000} offset={-100}>About</Link>
                <Link to="projects" onClick={() => {props.setVisible("hidden")}} smooth={true} duration={1000} offset={-100}>Projects</Link>
                <Link to="contact" onClick={() => {props.setVisible("hidden")}} smooth={true} duration={1000} offset={-50}>Contact</Link>
            </div>
        </div>
    );
}