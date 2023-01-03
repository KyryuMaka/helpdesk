import React from "react";

import ListGroup from "../components/listGroup";

function Index(){
    return(
        <>
            <div className="bg-sky-600 text-center text-white h-80 flex items-center justify-center">
                <div>
                    <div className="mb-5">
                        <p className="text-2xl font-bold">Chào mừng đến với HHH Helpdesk</p>
                        <p className="text-lg">Hệ thống Hỗ trợ người dùng HungHau Holdings</p>
                    </div>
                    <form>   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Tìm  kiếm</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" 
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="default-search" 
                                    className="block w-full p-4 pl-10 text-sm text-gray-900 
                                    border border-gray-300 rounded-lg bg-gray-50 
                                    focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Nhập vào để tìm kiếm..." required />
                            <button type="submit" 
                                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700
                                    hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                    font-medium rounded-lg text-sm px-4 py-2 
                                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Tìm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="flex justify-center items-center h-52">
                <div className="w-96">
                    
                </div>
            </div> */}
            <div className="flex justify-center dark:bg-black dark:text-white">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 m-3 justify-items-center">
                    <div>
                        <a href="/online-study">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto my-1">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 
                                        48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 
                                        60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 
                                        0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 
                                        59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 
                                        0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 
                                        15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 
                                        0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>
                            <p className="text-center">Dạy và Học</p>
                        </a>
                    </div>
                    <div>
                        <a href="/integrated-system">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto my-1">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 
                                        10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 
                                        0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 
                                        0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                            <p className="text-center">Hệ thống Tích hợp</p>
                        </a>
                    </div>
                    <div>
                        <a href="/network">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto my-1">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 
                                        11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 
                                        8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 
                                        18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                            </svg>
                            <p className="text-center">Mạng LAN / Wifi</p>
                        </a>
                    </div>
                    <div>
                        <a href="/email">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto my-1">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 
                                        2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 
                                        4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 
                                        2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 
                                        0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <p className="text-center">Thư điện tử</p>
                        </a>
                    </div>
                    <div>
                        <a href="/safe-information">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto my-1">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 
                                        0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 
                                        10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 
                                        0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            <p className="text-center">An toàn dữ liệu</p>
                        </a>
                    </div>
                    <div>
                        <a href=" ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto my-1">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 
                                        2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 
                                        0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            <p className="text-center">Hướng dẫn khác</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center dark:bg-black dark:text-white py-5">
                <ListGroup />
            </div>
        </>
    )
}

export default Index;