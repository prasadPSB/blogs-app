import axios from "axios";
import { useEffect, useState } from "react";

function Blogs(){
    const[blogData,setBlogData]=useState({
        title:"",
        description:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target; 
        setBlogData({
          ...blogData, 
          [name]: value, 
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Blog Data: ", blogData);
      };
      const saveData=(blogData)=>{
        axios.post("http://localhost:4200/BlogData",blogData)
        .then(Response =>{
          console.log(Response)          
        })
        .catch(err =>{
          console.log(err)
        })
      }
    
    return(
        <div className="bg-[#d9d9d9] h-screen sm:h-[90vh] pt-10" onSubmit={handleSubmit}>
            <div className="w-[90%] sm:w-[70%] m-auto border p-5 bg-[#ededed] rounded-md shadow-md shadow-[#6b6b6b]">
                <div>
                    <label className="text-[30px] font-bold text-[#636363]">Title:</label>
                    <input type="text" name="title" value={blogData.title} onChange={handleChange}  className="w-[75%] sm:w-[93%] border-b border-[#515151] outline-none text-[30px] font-[500] text-[#ff000096] pl-2 rounded-md"/>
                </div>
                <textarea placeholder="Description" name="description" value={blogData.description} onChange={handleChange} className="w-[100%] h-[50vh] border-2 text-[20px] border-[#bcbcbc] p-2 rounded-md mt-2 outline-none"></textarea>
            <div className="flex justify-end mt-5">
                <button className="bg-blue-900 text-white p-2 rounded-md mr-5">Cancel</button>
                <button className="bg-blue-900 text-white p-2 rounded-md" onClick={saveData}>Save</button>
            </div>
            </div>
        </div>
    )
}
export default Blogs;