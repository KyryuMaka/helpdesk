import React from "react";

function NotFound(){
    return(
        <>
            <div className="flex justify-center items-center py-24 dark:bg-sky-600">
                <div className="text-center dark:text-white">
                    <p className="font-extrabold text-[200px]">
                        404
                    </p>
                    <p className="font-semibold text-5xl uppercase mb-10">
                        page not found
                    </p>
                    <button className="bg-sky-600 px-5 py-2 m-5 rounded-xl text-white dark:bg-black dark:text-white">
                        <div className="flex justify-center items-center uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                            Quay lại
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotFound;