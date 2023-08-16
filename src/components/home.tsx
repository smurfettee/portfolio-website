import linkedin from "./icons";
import github from "./icons2";

export default function Home(){
    
    return (
        <div id="home" className="p-1">
            <div className="flex m-8 mt-56 flex-col items-center justify-center [&>div]:mb-16 md:mb-24">
                <div>
                    <div className="text-4xl font-bold text-center mb-6">Software Developer</div>
                    <div className="text-gray-600 text-center mb-8">Hi, I'm Ege Karacetin. A passionate Software Developer based in Italy.</div>
                    <div className="flex justify-center gap-8 text-2xl">
                        <a className="hover:text-blue-500 duration-200" target="_blank" href="https://www.linkedin.com/in/ege-karacetin-255190262/">{linkedin}</a>
                        <a className="hover:text-blue-500 duration-200" target="_blank" href="https://github.com/smurfettee">{github}</a>
                    </div>
                </div>
                <div className="flex flex-col mt-10">
                    <div className="text-center md:hidden">Tech Stack</div>
                    <div className="bg-gray-600 h-0.5 rounded-3xl mt-2 w-20 self-center mb-5 md:hidden"></div>
                    <div className="flex flex-wrap justify-center [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:w-20 [&>div]:h-20 [&>div]:rounded-full [&>div]:shadow-[0_0_10px_rgba(0,0,0,0.09)] gap-3">
                        <span className="hidden md:inline self-center ">Tech Stack</span>
                        <span className="hidden md:inline self-center w-0.5 h-8 bg-gray-600 mr-10"></span>
                        <div>
                            <img className="w-12 h-12 m-3" src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"></img>
                        </div>
                        <div>
                            <img className="w-12 h-12 m-3" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3256505/file-type-css-icon-md.png"></img>
                        </div>
                        <div>
                            <img className="w-9 h-10 m-3" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"></img>
                        </div>
                        <div>
                            <img className="w-12 h-10 m-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img>
                        </div>
                        <div>
                            <img className="w-10 h-10 m-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"></img>
                        </div>
                        <div>
                            <img className="w-10 h-8 m-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"></img>
                        </div>
                        <div>
                            <img className="w-10 h-10 m-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"></img>
                        </div>
                        <div>
                            <img className="w-10 h-10 m-4" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}