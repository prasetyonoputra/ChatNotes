import React, { useState } from "react";
import LoginPage from "./pages/login-page/LoginPage";
import HomePage from "./pages/home-page/HomePage";
import RegisterPage from "./pages/register-page/RegisterPage";
import ForgotPasswordPage from "./pages/forgot-password-page/ForgotPasswordPage";

function Navigation(params) {
    const [navigate, setNavigate] = useState("login");

    return (
        <>
            {navigate === "login" && <LoginPage setNavigate={setNavigate} />}
            {navigate === "home" && <HomePage setNavigate={setNavigate} />}
            {navigate === "register" && <RegisterPage setNavigate={setNavigate} />}
            {navigate === "forgot-password" && <ForgotPasswordPage setNavigate={setNavigate} />}
        </>
    );
}

export default Navigation;
