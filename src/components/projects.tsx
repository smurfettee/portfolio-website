import Project from "./project";

export default function Projects(){
    return (
        <div className="flex flex-col items-center">
            <div className="text-blue-600 text-xl font-extrabold mb-8">Portfolio</div>
            <div className="font-bold text-lg">These are a few of the projects that I've done</div>
            <Project 
                name="Coindom" 
                content="Coinsafe is a website that allows users to search for information about various cryptocurrencies in real-time. The website is designed to provide users with accurate and up-to-date information about the price, market cap, trading volume, and other key metrics of cryptocurrencies."
                technologies={["React", "Tailwind"]}
                github="https://github.com/smurfettee/Crypto-Site"
            />
        </div>
    );
}