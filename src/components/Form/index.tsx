"use client"

import { useState } from "react";

const Form = () => {


    const [name1,setName1] = useState<string>();
    const [name2,setName2] = useState<string>();

    const handleSubmit= (event: { preventDefault: any; }) => {
        event.preventDefault()
        console.log("name 1 is"+ name1)
        console.log("name 2 is"+ name2)
        setName1("")
        setName2("")
        
    }


    return (
        <form className="bg-pink" onSubmit={(e)=>handleSubmit(e)}>
            <div className="">
            <label htmlFor="name1">
                <input type="text" id="name1" onChange={(e)=>setName1(e.target.value)} value={name1}/>
                
            </label>
            ❤️❤️❤️
            <label htmlFor="name2">
                <input type="text" id="name2" onChange={(e)=>setName2(e.target.value)} value={name2}/>
                
            </label>
            </div>
            
            <button>is a date?</button>
        </form>
    )
};

export default Form
