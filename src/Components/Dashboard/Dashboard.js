import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate()
    const [likes, setLikes] = useState(0);
    const [disLikes, setDisLikes] = useState(0);

    const handleLikeClick = () => {
        setLikes(likes + 1);
        
    };
    const handleDisLikeClick = () => {
        setDisLikes(disLikes + 1);
    };
    const[blogData,BlogData]=useState();
    return (
        <div className="bg-[#d2d2d2] h-screen sm:h-[90vh]">

            <div className="w-[100%] sm:w-[70%] m-auto p-5 ">
                <div className="flex justify-between">
                    <div className="text-[40px] font-bold flex align-bottom text-[#484848] ">
                        Blogs
                    </div>
                    <button className="bg-blue-900 text-white px-[10px] py-[10px] m-2  rounded-md font-[500] cursor-pointer" onClick={() => navigate("/")}>
                        <i class="fa fa-plus-circle" aria-hidden="true"></i> Create new Post
                    </button>
                </div>
                <div className="font-[500] text-[18] m-3">
                    Publish your Passion your way ...
                </div>
                <hr className="border-[black] mt-5 mb-5 m-3" />
                <div className="border border-[#d2d2d2] p-3 rounded-md shadow-[#878787] shadow-md bg-[#f0f0f0]">
                    <div className="text-[30px] font-bold text-[#333333]">
                        Hello World
                    </div>
                    <div className="font-bold text-[#414141]">
                        Created By
                        <span className="font-[500] pl-2 text-[#5c5c5c] text-[15px]"><em>prasadbor16@gmail.com</em></span>
                    </div>
                    <div className="font-bold text-[#414141]">
                        Created At
                        <span className="font-[500] pl-2 text-[#5c5c5c] text-[15px]">
                            <em>26 Apr 2025</em>
                        </span>
                    </div>
                    <hr className="border-[black] mt-5 " />
                    <div className="font-[500]">
                        Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for
                        previewing layouts. It features scrambled Latin text, which emphasizes the design over content
                        of the layout. It is the standard placeholder text of the printing and publishing industries.
                        It does not have any meaningful content and is often used to fill spaces in design mockups.
                        Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for
                        previewing layouts. It features scrambled Latin text, which emphasizes the design over content
                        of the layout. It is the standard placeholder text of the printing and publishing industries.
                        It does not have any meaningful content and is often used to fill spaces in design mockups.
                    </div>
                    <div className="flex justify-normal mt-4">
                        <button className="mr-2 bg-[green] rounded-md px-3 py-1 text-white" onClick={handleLikeClick}>
                            <i class="fa fa-thumbs-up" aria-hidden="true" ></i><span> {likes}</span>
                        </button>
                        <button className="bg-[#ffcc14] px-3 py-1 rounded-md text-white" onClick={handleDisLikeClick}>
                            <i class="fa fa-thumbs-down" aria-hidden="true"></i><span> {disLikes}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Dashboard;