import { FaBars } from "react-icons/fa";
import avatar from "/avatar.png";

const Header = () => {
    return (
        <header className="flex flex-row gap-3 justify-evenly py-4 px-2 items-center sticky top-0 border-b border-b-black">
            <div className="bg-[#D2794F] rounded-lg p-2">
                <img src={avatar} alt="Avatar image" className="w-[35px]" />
            </div>
            <div className="flex flex-col">
                <span className="text-[#3a3939] text-lg italic font-normal">Welcome Back</span>
                <h3 className="text-2xl font-bold">Armando Almanza</h3>
            </div>
            <FaBars className="text-[25px]" />
        </header>
    );
};

export default Header;
