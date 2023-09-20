
import React,{useState,useCallback} from "react";
import {useNavigate} from "react-router-dom"


const  Meet =()=> {

    const [value,setValue] = useState();
    const navigate=useNavigate();
    const handlejoinroom= useCallback(()=>{
        navigate(`/room/ ${value}`);
    },[navigate,value]);

    return (
        <>
            <div>
               <input  value={value}
                       onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Enter Your Meet Code"/>
                <button onClick={handlejoinroom}>Join Meet</button>
            </div>
        </>
    );
};
export default Meet;