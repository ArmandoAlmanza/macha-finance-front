import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/Registerform";
import logo from "/logo.png";

const AuthPage = () => {
    const [state, setState] = useState("login");
    const handleChange = () => {
        setState(state === "login" ? "register" : "login");
    };
    return (
        <main className="h-screen grid place-content-center gap-2">
            <img src={logo} className="w-64 mx-auto" />
            <h1 className="text-2xl font-bold">Welcome to Macha Finances</h1>

            {state === "login" ? (
                <LoginForm setState={handleChange} />
            ) : (
                <RegisterForm setState={handleChange} />
            )}
        </main>
    );
};

export default AuthPage;
