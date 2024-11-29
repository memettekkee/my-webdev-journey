import { useEffect, useState } from "react";
import { getUserProfile } from "../utils/fetchApi";
import UpdateForm from "../components/UpdateForm";

export default function dashboard() {
  const [userData, setUserData] = useState(null);
  const [updateData, setUpdateData] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-tl from-teal-200 via-sky-300 to-blue-200 font-lexend">
      <div className="px-48 py-20 flex justify-center items-center ">
        <div className="w-1/2 bg-white flex flex-col justify-center items-center rounded-lg py-5 text-2xl font-semibold">
          {updateData ? ( <UpdateForm onToggle={() => setUpdateData(false)} /> ) : (
            <>
              <h1>Welcome, {userData.nama_lengkap}</h1>
              <p>Email: {userData.email}</p>
              <button className="py-10" onClick={handleLogout}>logout</button>
              <button onClick={() => setUpdateData(true)}>Update user</button>
            </>
          )}
        </div>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  )
}