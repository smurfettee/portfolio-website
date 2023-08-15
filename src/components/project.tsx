import github from "./icons2";

interface props {
    name: string,
    content: string,
    technologies: string[],
    github: string
}

export default function Project(props:props){
    return (
        <div className="flex flex-col items-center m-8 p-4 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] [&>div]:mb-5">
            <div className="text-xl font-bold ">{props.name}</div>
            <div className="text-gray-600 text-center w-[90%] ">{props.content}</div>
            <div className="flex flex-wrap">
                {
                    props.technologies.map(tech => (
                        <div className="m-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg p-2 font-bold">{tech}</div>
                    ))
                }
            </div>
            <a href={props.github} target="_blank" className="mb-5 text-lg hover:text-blue-600 duration-200">Code {github}</a>
        </div>
    );
}