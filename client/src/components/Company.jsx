import React from "react";
import logo from "../assets/qualizeal_logo.jpeg"

const Comapany=()=>{
    return(
        <>
            <div className="mt-20">
                <div className="flex justify-center flex-col items-center">
                    <img src={logo} alt="" className="w-28"/>
                    <p className="text-xl font-semibold">Join company, a Community Like No Other!</p>
                    <p>Learn, earn and connect with a global community of software testers.</p>
                    <a href="/personal" className="underline-offset-2 underline hover:scale-105 hover:font-bold">Sign me Up</a>
                </div>
            </div>
        </>
    )
}
export default Comapany