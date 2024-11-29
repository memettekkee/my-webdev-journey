import { useState } from "react";
import { loginUser } from "../utils/fetchApi";

export default function LoginForm({ onToggle }) {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(formData);
            localStorage.setItem("token", data.user.token); // Simpan token di localStorage
            localStorage.setItem("user_id", data.user.user_id); // Simpan user_id di localStorage
            alert("Login successful!");
            window.location.href = "/dashboard";
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="p-4 font-metrophobic font-normal text-lg text-center">
            Please Login !
            <form className="py-4 flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    className="p-3 outline-none rounded-lg border-solid border-2 border-emerald-500"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="password"
                    className="p-3 outline-none rounded-lg border-solid border-2 border-emerald-500"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button className="bg-black text-white rounded-lg py-1" type="submit">Login</button>
            </form>
            <p>Belum punya akun? <button onClick={onToggle}>Register</button></p>
        </div>
    )
}