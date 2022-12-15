import React from "react";
import Header from "../components/header";

function Index(){
    return(
        <>
            <Header />
            <div className="bg-sky-600 text-center text-white h-80 flex items-center justify-center">
                <div>
                    <p className="text-2xl font-bold">Chào mừng đến với HHH Helpdesk</p>
                    <p className="text-lg">Hệ thống Hỗ trợ người dùng HungHau Holdings</p>
                </div>
            </div>
            <div className="flex justify-center items-center h-52">
                <div className="w-96">
                    <form>   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Tìm  kiếm</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" 
                                    class="block w-full p-4 pl-10 text-sm text-gray-900 
                                    border border-gray-300 rounded-lg bg-gray-50 
                                    focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Nhập vào để tìm kiếm..." required />
                            <button type="submit" 
                                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700
                                    hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                    font-medium rounded-lg text-sm px-4 py-2 
                                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Tìm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-center bg-black text-white">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 m-3 justify-items-center">
                    <div>
                        <a href=" ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
                            <p>Dạy và Học</p>
                        </a>
                    </div>
                    <div>
                        <a href=" ">
                            <p>Hệ thống Tích hợp</p>
                        </a>
                    </div>
                    <div>
                        <a href=" ">
                            <p>Mạng LAN / Wifi</p>
                        </a>
                    </div>
                    <div>
                        <a href=" ">
                            <p>Thư điện tử</p>
                        </a>
                    </div>
                    <div>
                        <a href=" ">
                            <p>An toàn dữ liệu</p>
                        </a>
                    </div>
                    <div>
                        <a href=" ">
                            <p>Hướng dẫn khác</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;