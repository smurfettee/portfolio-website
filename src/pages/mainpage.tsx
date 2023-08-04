import Navbar from "../components/navbar";
import SideNavbar from "../components/sideNavbar";
import { useState } from "react";

export default function Mainpage()  {

    const [visible, setVisible] = useState<string>("0%");

    return (
        <div className="font-primary bg-[rgb(249,249,249)]">
            <Navbar setVisible={setVisible} width={visible}/>
            <SideNavbar setVisible={setVisible} width={visible}/>
        </div>
    );
}