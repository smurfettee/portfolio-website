export default function AboutMe(){
    return (
        <div id="about" className="flex flex-col items-center text-center  mb-40 bg-[rgb(243,243,243)] md:flex-row md:justify-center md:text-start md:p-40">
            <div className="w-80 h-56 bg-no-repeat bg-cover rounded-lg m-4 md:w-[28rem] md:h-80" style={{backgroundImage: "url('https://animesher.com/orig/0/35/350/3507/animesher.com_suzumiya-haruhi-no-yuutsu-gif-yuki-nagato-350766.gif')"}}></div>
            <div className="[&>div]:m-4 flex items-center justify-center flex-col md:items-start md:[&>div]:m-2">
                <div className="text-blue-600 text-xl font-extrabold">ABOUT ME</div>
                <div className=" font-bold text-lg md:text-start">A dedicated Software Engineer based in Torino, Italy.</div>
                <div className="text-gray-600 md:w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, orci ac elementum pretium, eros mi consectetur diam, sed volutpat sapien purus id nunc. Quisque fermentum vulputate tortor id ornare. Sed et nulla et quam vehicula finibus. Aenean ut bibendum mauris, a tempor massa. Curabitur dapibus, turpis a volutpat semper, urna ipsum condimentum orci, quis interdum augue nulla at odio. Nulla at placerat justo.</div>
            </div>
        </div>
    );
}