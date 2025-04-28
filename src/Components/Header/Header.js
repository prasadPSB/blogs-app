import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate(
    );
    return (
        <div className="flex justify-between text-white bg-blue-900 m-0 p-3.5">
            <div className="text-[30px] font-bold cursor-pointer" onClick={() => navigate('/HomePage')}>
                Blogs
            </div>
            <div className="text-[20px] font-[500]">
                <button className="pr-3" onClick={() => navigate('/Login')}>Login</button>
                <button className="pl-3" onClick={() => navigate('/Register')}>Register</button>
            </div>

        </div>
    )
}
export default Header;