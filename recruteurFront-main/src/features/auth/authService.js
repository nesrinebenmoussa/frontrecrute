import axios from "axios";
import { Navigate } from "react-router-dom";

const API_URL = "/api/users/";

// Register user
const register = async(userData) => {
    const response = await axios.post(
        "http://localhost:5000/api/recruters/register",
        userData
    );

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

// Login user
const login = async(userData) => {
    const response = await axios.post(
        "http://localhost:5000/api/recruters/login",
        userData
    );

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem("user");
    return true;
};

const authService = {
    register,
    logout,
    login,
};

export default authService;