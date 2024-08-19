import { useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { useNavigate } from "react-router";

interface Props {
    setState: () => void;
}
const LoginForm = ({ setState }: Props) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(user);
        if (user.email === "") {
            alert("please enter a valid email");
            return;
        }
        navigate(`/dashboard/${user.email}`);
    };

    return (
        <form className="w-full mx-auto grid gap-4 p-4 h-full">
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                    placeholder=" "
                    required
                    onChange={handleChange}
                />
                <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Email address
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                    placeholder=" "
                    required
                    onChange={handleChange}
                />
                <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Password
                </label>
            </div>
            <p
                className="ms-2 text-sm font-medium text-purple-500 hover:underline dark:text-purple-400 cursor-pointer"
                onClick={setState}
            >
                You don't have an account?
            </p>
            <button
                className="mt-6 bg-teal-500 text-black font-bold px-6 py-2 flex items-center border-r border-b-2 border-b-black border-r-black shadow-lg w-3/4 mx-auto transition-colors hover:bg-[#41AAAD] duration-300 ease-in-out gap-2 content-center text-2xl"
                onClick={handleClick}
            >
                <p className="mx-auto">Log in</p>
                <span className="ml-2">
                    <FaUserCheck />
                </span>
            </button>
        </form>
    );
};

export default LoginForm;
