import { useState, useEffect } from "react";
import { updateUserProfile, getUserProfile } from "../utils/fetchApi";

export default function UpdateForm({ onToggle }) {

    const [userData, setUserData] = useState(null);
    const [formData, setFormData] = useState({
        username: "",
        nama_lengkap: "",
        email: "",
    });

    const userId = localStorage.getItem("user_id");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile(userId);
                // console.log(data)
                setUserData(data.user_info);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProfile();
    }, []);

    useEffect(() => {
        if (userData) {
            setFormData({
                username: userData.username,
                nama_lengkap: userData.nama_lengkap,
                email: userData.email,
            });
        }
    }, [userData]);  // Hanya update jika userData berubah

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await updateUserProfile(userId, formData)
            alert("akun telah di update")
            setMessage(data.message || "data profile Successfuly updated !");
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
                <button className="bg-black text-white rounded-lg py-1" type="submit">Update</button> // tambahin biar ngerefresh gitu
            </form>
            <button onClick={onToggle}>kembali</button>
        </div>
    )

}