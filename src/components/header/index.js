import React from "react";
import Navbar from "./navbar";
import ToogleDarkButton from "../toggleDark";


function Header(){
    return(
        <>
        <div className="dark:bg-black dark:text-white text-xs">
            <div className="grid grid-cols-5 md:grid-cols-2 container mx-auto">
                <div className="col-span-4 flex md:col-span-1">
                    <div className="flex m-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 
                                    002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 
                                    1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 
                                    01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 
                                    3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                        </svg>
                        <p className="ml-1">1800 1568</p>
                    </div>
                    <div className="flex m-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 
                                    0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 
                                    01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <p className="ml-1">helpdesk@hunghau.vn</p>
                    </div>
                </div>
                <div className="justify-self-end">
                    <ToogleDarkButton/>
                </div>
            </div>
        </div>
        <Navbar />
        </>
    )
}

export default Header;