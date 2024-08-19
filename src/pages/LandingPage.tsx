import { FaGithub, FaInstagram, FaUser } from "react-icons/fa";
import fondo2 from "/fondo1.png";
import { Link } from "react-router-dom";
export const LandingPage = () => {
    return (
        <main className="relative bg-gray-100 min-h-screen flex flex-col justify-center items-center py-6 bg-center">
            <div className="absolute top-5 left-0 w-full h-1/2">
                <img
                    src={fondo2}
                    alt="Background 1"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute bottom-0 bg-[#6A6BC3] shadow-md rounded-tl-2xl rounded-tr-2xl p-4 w-full text-white h-[430px] grid place-items-center">
                <div className="text-center w-full grid gap-4">
                    <h1 className="text-4xl font-bold">Macha Finances</h1>
                    <p className="mt-2 italic">
                        the best way to get your personal finances
                    </p>
                    <Link
                        to={"/auth"}
                        className="mt-6 bg-teal-500 text-black font-bold px-6 py-2 flex items-center border-r border-b-2 border-b-black border-r-black shadow-lg w-3/4 mx-auto transition-colors hover:bg-[#41AAAD] duration-300 ease-in-out gap-2 content-center text-2xl"
                    >
                        <p className="mx-auto">Get Started</p>
                        <span className="ml-2">
                            <FaUser />
                        </span>
                    </Link>
                </div>
                <div className="flex justify-between items-center mt-8 gap-4">
                    <span className="text-sm">Created by Armando Almanza</span>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/ArmandoAlmanza"
                            target="_blank"
                        >
                            <FaGithub className="transition-colors duration-200 ease-in-out hover:text-black text-xl" />
                        </a>
                        <a
                            href="https://github.com/ArmandoAlmanza"
                            target="_blank"
                        >
                            <FaInstagram className="transition-colors duration-200 ease-in-out hover:text-pink-500 text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};
