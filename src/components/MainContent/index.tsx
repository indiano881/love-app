"use client"

import { useState } from "react";


import Form from "../Form";
import List from "../List";


const MainContent = () => {
    const [combinations, setCombinations]=useState<string[]>(["Adam + Eve = 0", "Davide + Pasta = 100"])

    return (
        <div className="grow bg-red-400">
          
          <Form combinations={combinations} setCombinations={setCombinations}/>
          
          <List  combinations={combinations}/>
        </div>
    )
};

export default MainContent
