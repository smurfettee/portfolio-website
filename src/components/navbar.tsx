import React, { useState } from "react";
import Link from "./ReactScroll";
import { Dispatch, SetStateAction } from 'react';

interface props {
    setVisible : Dispatch<SetStateAction<string>>;
    width: string
}

export default function Navbar(props:props) {

    return (
        <div className="flex w-full bg-white justify-between shadow-md [&>div]:m-8 [&>div]:text-2xl [&>div]:font-semibold">
            <div className="text-[rgb(49,50,54)]">Ege.dev</div>
            <div onClick={() => {props.setVisible("screen"); }} className="text-[rgb(49,50,54)] cursor-pointer">&#9776;</div>
            <div className="hidden">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Projects</Link>
                <Link>Contact</Link>
            </div>
        </div>
    );
}