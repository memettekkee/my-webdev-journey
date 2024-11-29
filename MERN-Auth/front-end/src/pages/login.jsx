import { useState } from "react"
import RegisterForm from "../components/RegisterForm"
import LoginForm from "../components/LoginForm"

export default function login() {
    const [register, setRegister] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-tl from-teal-200 via-sky-300 to-blue-200 font-lexend">
            <div className="px-48 py-20 flex justify-center items-center ">
                <div className="w-1/2 bg-white flex flex-col justify-center items-center rounded-lg py-5 text-2xl font-semibold">
                    Auth Test
                    {register ? (
                        <RegisterForm onToggle={() => setRegister(false)}/>
                    ) : (
                        <LoginForm onToggle={() => setRegister(true)}/>
                    )}
                </div>
            </div>
        </div>
    )
}