import AboutMe from "../components/aboutme";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Home from "../components/home";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import SideNavbar from "../components/sideNavbar";
import { useState } from "react";

export default function Mainpage()  {

    const [visible, setVisible] = useState<string>("hidden");

    return (
        <div className="font-primary bg-[rgb(249,249,249)]">
            <Navbar setVisible={setVisible} width={visible}/>
            <SideNavbar setVisible={setVisible} width={visible}/>
            <Home/>
            <AboutMe/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}