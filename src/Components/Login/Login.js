import { useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate()
    return (
        <div className="bg-[#d3d3d3] h-screen sm:h-[90vh] pt-10">
            <div className="w-[90%] m-auto  border border-[#959595] p-5 rounded-md shadow-md shadow-[#959595] bg-[#ececec] sm:w-[30%]">
                <div className="font-[1000] text-5xl text-[#464545] mb-5">Blogs</div>
                <div className="text-[18px] text-[#393939] font-[500]">publish your passion your way ...</div>
                <hr className="border-black mt-5"/>
                <div className="font-bold text-5xl text-center text-blue-900 mb-10 mt-5">Login</div>
                <label className="font-medium">Email id:</label>
                <input type="text" placeholder="test@gmail.com" className="bg-[#ffffff] rounded-md w-[100%] p-2 mb-5"/>
                <label className="font-medium">Password:</label>
                <input type="text" placeholder="pass1234" className="bg-[#ffffff] rounded-md w-[100%] p-1"/>
                <button className=" text-white bg-blue-900 mt-8 mb-10 rounded-md p-2 w-[100%]  text-[20px]" onClick={()=>navigate('/Dashboard')}>Login</button>

            </div>
        </div>
    )
}
export default Login;