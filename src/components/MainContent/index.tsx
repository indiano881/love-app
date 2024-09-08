"use client"

import { useEffect, useState } from "react";
import Form from "../Form";
import List from "../List";

const MainContent = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [combinations, setCombinations] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null); 

  
  useEffect(() => {
    setCombinations(["Adam + Eve = 0", "Davide + Pasta = 100"]);
  }, []);

  
  useEffect(() => {
    if (isStarted) {
      setScore(0); 
      setCombinations([]); 
    } else {
      setScore(null); 
    }
  }, [isStarted]);

  return (
    <div className="grow bg-red-400">
      <Form 
        combinations={combinations} 
        setCombinations={setCombinations} 
        isStarted={isStarted} 
        score={score} 
        setScore={setScore} 
      />
      <List 
        combinations={combinations} 
        setCombinations={setCombinations} 
        isStarted={isStarted} 
        setIsStarted={setIsStarted} 
      />
    </div>
  );
};

export default MainContent;
