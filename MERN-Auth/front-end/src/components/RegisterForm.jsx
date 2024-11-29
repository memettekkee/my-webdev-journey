import { useState } from "react";
import { registerUser } from "../utils/fetchApi";

export default function RegisterForm({ onToggle }) {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        nama_lengkap: "",
        email: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const data = await registerUser(formData)
          alert("Akun telah dibuat")
          setMessage(data.message || "Registration Successful!");
          onToggle()
        } catch (error) {
          setMessage(error);
        }
      };

    return (
        <div className="p-4 font-metrophobic font-normal text-lg text-center">
            Please Register !
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
                <input
                    type="text"
                    name="nama_lengkap"
                    className="p-3 outline-none rounded-lg border-solid border-2 border-emerald-500"
                    placeholder="Full Name"
                    value={formData.nama_lengkap}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="email"
                    className="p-3 outline-none rounded-lg border-solid border-2 border-emerald-500"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <button className="bg-black text-white rounded-lg py-1" type="submit">Register</button>
            </form>
            <p>Sudah punya akun? <button onClick={onToggle}>Login</button></p>
        </div>
    )
}