import github from "./icons2";
import square from "./icon5";

interface props {
    name: string,
    content: string,
    technologies: string[],
    github: string,
    live?: string,
}

export default function Project(props:props){
    return (
        <div className="flex flex-col items-center m-8 p-4 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] [&>div]:mb-5 md:w-1/3 md:h-96">
            <div className="text-xl font-bold ">{props.name}</div>
            <div id="projectText" className="text-gray-600 text-center w-[90%] md:h-3/4 md:overflow-auto duration-500">{props.content}</div>
            <div className="flex flex-wrap items-center justify-center">
                {
                    props.technologies.map(tech => (
                        <div className="m-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-2 font-bold ">{tech}</div>
                    ))
                }
            </div>
            <div>
                <a href={props.github} target="_blank" className="mb-5 mr-5 text-lg hover:text-blue-600 duration-200">Code {github}</a>
                {props.live && <a href={props.live} target="_blank" className="mb-5 text-lg hover:text-blue-600 duration-200">Live Demo {square}</a>}
            </div>
        </div>
    );
}