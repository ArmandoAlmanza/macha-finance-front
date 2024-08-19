import {
    FaChartLine,
    FaRegSquarePlus,
    FaHouse,
    FaMoneyBill,
    FaUser,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

const Footer = () => {
    const url = window.location.href;
    const links = [
        {
            path: "/dashboard/armando@coca.com",
            text: "Home",
            icon: <FaHouse />,
        },
        {
            path: "/",
            text: "Expends",
            icon: <FaMoneyBill />,
        },
        {
            path: "/",
            text: "New",
            icon: <FaRegSquarePlus />,
        },
        {
            path: "/",
            text: "Income",
            icon: <FaChartLine />,
        },
        {
            path: "/",
            text: "Profile",
            icon: <FaUser />,
        },
    ];
    return (
        <footer className="p-3 flex flex-row gap-4 border-t border-t-black">
            {links.map((link, i) => (
                <Link
                    className="flex items-center mx-auto"
                    to={link.path}
                    key={i}
                >
                    <p
                        className={clsx(
                            "text-[25px] flex flex-col items-center hover:text-purple-600 transition-colors ease-in-out duration-300",
                            {
                                "text-purple-600":
                                    url.split("/")[3] ===
                                    link.path.split("/")[1],
                            }
                        )}
                    >
                        {link.icon}

                        <span className="text-sm font-bold">{link.text}</span>
                    </p>
                </Link>
            ))}
        </footer>
    );
};

export default Footer;
