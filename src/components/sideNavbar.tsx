import Link from "./ReactScroll";
import { Dispatch, SetStateAction } from 'react';

interface props {
    setVisible : Dispatch<SetStateAction<string>>;
    width: string
}

export default function SideNavbar(props:props) {

    const {width} = props

    return (
        <div id="slide_navbar" className={`h-screen w-${props.width=="screen" ? props.width : `[${props.width}]`} fixed bg-white text-2xl font-semibold ${props.width == "0%" && "hidden"} transition duration-150 left-0 top-0`}>
            <div className="h-1/5 flex justify-end items-start"><div className="cursor-pointer m-8 text-3xl" onClick={() => {props.setVisible("0%");}}>&#9747;</div></div>
            <div className="h-4/5 flex flex-col items-center justify-center [&>a]:m-5">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Projects</Link>
                <Link>Contact</Link>
            </div>
        </div>
    );
}