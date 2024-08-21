import React from "react";

function ListGroup(){
    const sampleData = [
        {
            title: "Lỗi mạng wifi chập chờn, không có kết nối",
            descript: `Tôi thường xuyên gặp vấn đề mạng wifi bị chập chờn, dù ngồi gần cục phát mạng nhưng máy lúc nhận tín hiệu lúc không.
            Lorem dasdasdasdasudhasdasdjkasjd Lore-sm- darkd darkd msdfjksldjflksd fnsdfnsdnf ,sdnfm,sd nfm,snm, fsndm,fbsdgbwjbg 
            jkbgkerbg jkdfbgjkfdn  kdfgjbd sdjkfsd jkfsjk fjksfsd fsd jfsdn fsdjf hjsdh fjsdhfjksdhjkfh sdfhjksdhfsdfjk sd hjkf hsdjkfh jksdh kjsdh jksdh fjk `,
            content: "",
            reply: 15,
            vote: 50,
            view: 1500,
        },{
            title: "Lỗi mạng wifi chập chờn, không có kết nối",
            descript: `Tôi thường xuyên gặp vấn đề mạng wifi bị chập chờn, dù ngồi gần cục phát mạng nhưng máy lúc nhận tín hiệu lúc không.
            Lorem dasdasdasdasudhasdasdjkasjd Lore-sm- darkd darkd msdfjksldjflksd fnsdfnsdnf ,sdnfm,sd nfm,snm, fsndm,fbsdgbwjbg 
            jkbgkerbg jkdfbgjkfdn  kdfgjbd sdjkfsd jkfsjk fjksfsd fsd jfsdn fsdjf hjsdh fjsdhfjksdhjkfh sdfhjksdhfsdfjk sd hjkf hsdjkfh jksdh kjsdh jksdh fjk `,
            content: "",
            reply: 15,
            vote: 50,
            view: 1500,
        },{
            title: "Lỗi mạng wifi chập chờn, không có kết nối",
            descript: `Tôi thường xuyên gặp vấn đề mạng wifi bị chập chờn, dù ngồi gần cục phát mạng nhưng máy lúc nhận tín hiệu lúc không.
            Lorem dasdasdasdasudhasdasdjkasjd Lore-sm- darkd darkd msdfjksldjflksd fnsdfnsdnf ,sdnfm,sd nfm,snm, fsndm,fbsdgbwjbg 
            jkbgkerbg jkdfbgjkfdn  kdfgjbd sdjkfsd jkfsjk fjksfsd fsd jfsdn fsdjf hjsdh fjsdhfjksdhjkfh sdfhjksdhfsdfjk sd hjkf hsdjkfh jksdh kjsdh jksdh fjk `,
            content: "",
            reply: 15,
            vote: 50,
            view: 1500,
        },{
            title: "Lỗi mạng wifi chập chờn, không có kết nối",
            descript: `Tôi thường xuyên gặp vấn đề mạng wifi bị chập chờn, dù ngồi gần cục phát mạng nhưng máy lúc nhận tín hiệu lúc không.
            Lorem dasdasdasdasudhasdasdjkasjd Lore-sm- darkd darkd msdfjksldjflksd fnsdfnsdnf ,sdnfm,sd nfm,snm, fsndm,fbsdgbwjbg 
            jkbgkerbg jkdfbgjkfdn  kdfgjbd sdjkfsd jkfsjk fjksfsd fsd jfsdn fsdjf hjsdh fjsdhfjksdhjkfh sdfhjksdhfsdfjk sd hjkf hsdjkfh jksdh kjsdh jksdh fjk `,
            content: "",
            reply: 15,
            vote: 50,
            view: 1500,
        }
    ]
    return(
        <>
            <div className="overflow-x-auto relative shadow-md bg-gray-100 dark:bg-gray-900 sm:rounded-lg w-2/3">
                <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    {(sampleData.length === 0)?<></>:
                        sampleData.map((dt, index) => 
                            <div key={index} 
                                className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 
                                    grid p-3 sm:p-0 m-2 justify-items-center 
                                    grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                                <div className="py-4 px-6 md:text-right">
                                    <p className="py-1">{dt.reply} Câu trả lời</p>
                                    <p className="py-1">{dt.vote} Đánh giá</p>
                                    <p className="py-1">{dt.view} Lượt xem</p>                                
                                </div>
                                <div className="py-4 px-6 text-gray-900 text-justify dark:text-white 
                                    sm:col-span-2 md:col-span-3 lg:col-span-5">
                                    <h1 className="font-bold text-xl">{dt.title}</h1>
                                    <p className="dark:text-slate-300">{dt.descript}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
};

export default ListGroup;