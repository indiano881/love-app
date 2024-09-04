"use client";

import { useState } from "react";
import { calculateCompatibilityScore } from "../../../utils/function";

const Form = () => {
    const [name1, setName1] = useState<string>("");
    const [name2, setName2] = useState<string>("");
    const [number, setNumber] = useState<number | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       
        console.log("name 1 is " + name1);
        console.log("name 2 is " + name2);

        if (name1 && name2  && isNaN(name1) && isNaN(name2)) {
            
            calculateCompatibilityScore(name1, name2, setNumber);
        }

        setName1("");
        setName2("");
        
    };

    return (
        <form className="bg-pink" onSubmit={(e) => handleSubmit(e)}>
            <div className="">
                <label htmlFor="name1" >
                    
                    <input
                        type="text"
                        id="name1"
                        value={name1}
                        data-testid="name1"
                        onChange={(e) => setName1(e.target.value)}
                        
                    />
                </label>
                ❤️❤️❤️
                <label htmlFor="name2" >
                    <input
                        type="text"
                        id="name2"
                        value={name2}
                        data-testid="name2"
                        onChange={(e) => setName2(e.target.value)}
                        
                    />
                </label>
            </div>
            <button type="submit">is a date?</button>
            {number !== null && <p data-testid="score-message">Compatibility Score: {number}</p>}
        </form>
    );
};

export default Form;
