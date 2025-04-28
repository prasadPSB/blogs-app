import { useNavigate } from "react-router-dom";

function HomePage(){
    const navigate=useNavigate()
    return(
        <div className="bg-[#c9c9c9] h-[90vh] pt-10">
            <div className="w-[90%] sm:w-[70%] m-auto border border-[#838383] rounded-md shadow-md shadow-[#838383] p-5 bg-[#f7f7f7]">
                <div className="font-bold text-[35px] text-[#333333]">
                    Blogs !
                </div>
                <div className="font-[500] text-[#505050]">
                    Publish your passion your way ...
                </div>
                <hr className="border-[black] mt-5"/>
            <div className="flex justify-end">
                <button className="bg-blue-900 p-[8px] m-5 rounded-md text-white" onClick={()=>navigate('/Login')}>
                    Login
                </button>
                <button className="bg-blue-900 p-[8px] m-5 rounded-md text-white" onClick={()=>navigate('/Register')}>
                    Register
                </button>
            </div>
            </div>

        </div>
    )
}
export default HomePage;