import Project from "./project";

export default function Projects(){
    return (
        <div id="projects" className="flex flex-col items-center">
            <div className="text-blue-600 text-xl font-extrabold mb-8">Portfolio</div>
            <div className="font-bold text-lg mb-10">These are a few of the projects that I've done</div>
            <Project 
                name="Coindom" 
                content="Coinsafe is a website that allows users to search for information about various cryptocurrencies in real-time. The website is designed to provide users with accurate and up-to-date information about the price, market cap, trading volume, and other key metrics of cryptocurrencies."
                technologies={["React", "Tailwind"]}
                github="https://github.com/smurfettee/Crypto-Site"
            />
            <Project
                name="Personal Blog"
                content="A personal blog website where users can login, register, post and edit their blogs and see other peoples blogs on the main page."
                technologies={["React", "MongoDB", "ExpressJS"]}
                github="https://github.com/smurfettee/MERN-Blog-Frontend"
            />
            <Project
                name="Typing Speed Game"
                content="A typing speed game that the user tries to write the duplicate of the sentence that appear on the screen also getting the words per minute as a result."
                technologies={["Javascript", "HTML", "CSS"]}
                github="https://github.com/smurfettee/Typing-Speed-Game"
            />
        </div>
    );
}