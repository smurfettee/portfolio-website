import map from "./icon3";
import mail from "./icon4";

export default function Contact(){
    return (
        <div id="contact" className="bg-[rgb(243,243,243)] flex flex-col items-center mt-10">
            <div className="mt-20 font-bold text-blue-600 text-xl">CONTACT</div>
            <div className="flex flex-col items-center mt-10">
                <div className="p-5 mb-4 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                    <div className="text-3xl text-blue-600">{map}</div>
                </div>
                <div className="font-bold text-lg mb-1">Location</div>
                <div className="text-gray-600">Torino, Italy</div>
            </div>
            <div className="flex flex-col items-center mt-14 mb-20">
                <div className="p-5 mb-4 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                    <div className="text-3xl text-blue-600">{mail}</div>
                </div>
                <div className="font-bold text-lg mb-1">Mail</div>
                <div className="text-gray-600">egekaracetin35@hotmail.com</div>
            </div>
        </div>
    );
}