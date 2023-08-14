import github from "./icons2";

interface props {
    name: string,
    content: string,
    technologies: string[],
    github: string
}

export default function Project(props:props){
    return (
        <div className="flex flex-col items-center m-14">
            <div>{props.name}</div>
            <div>{props.content}</div>
            <div>
                {
                    props.technologies.map(tech => (
                        <div>{tech}</div>
                    ))
                }
            </div>
            <a href={props.github} target="_blank">Code {github}</a>
        </div>
    );
}