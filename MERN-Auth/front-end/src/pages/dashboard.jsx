import { useEffect, useState } from "react";
import { getUserProfile } from "../utils/fetchApi";

export default function dashboard() {
    const [ userData, setUserData ] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
          const userId = localStorage.getItem("user_id");
          try {
            const data = await getUserProfile(userId);
            setUserData(data.user_info);
          } catch (error) {
            console.error(error);
          }
        };
        fetchProfile();
      }, []);

    const handleLogout = () => {
        localStorage.clear()
        window.location.href = "/";
    }

    return userData ? (
        <div>
        <h1>Welcome, {userData.nama_lengkap}</h1>
        <p>Email: {userData.email}</p>
        <button onClick={handleLogout}>logout</button>
      </div>
    ) : (
        <p>Loading</p>
    )
}