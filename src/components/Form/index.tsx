"use client"

import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { calculateCompatibilityScore } from "../../../utils/function";

type FormProps = {
  combinations: string[];
  setCombinations: Dispatch<SetStateAction<string[]>>;
  isStarted: boolean;
  score: number | null; 
  setScore: Dispatch<SetStateAction<number | null>>; 
};

const Form = ({ combinations, setCombinations, isStarted, score, setScore }: FormProps) => {
  const [name1, setName1] = useState<string>("");
  const [name2, setName2] = useState<string>("");

  
  useEffect(() => {
    if (isStarted) {
      setScore(0); 
    }
  }, [isStarted, setScore]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name1 && name2) {
      calculateCompatibilityScore(name1, name2, (newScore: number) => {
        setScore(newScore); 

        const newSingleInfo = `${name1} + ${name2} = ${newScore}`;
        setCombinations([...combinations, newSingleInfo]);
      });

      setName1("");
      setName2("");
    }
  };

  return (
    <form
      className="bg-pink-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-12"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
        Check compatibility:
      </h2>

      <div className="mb-4">
        <label
          htmlFor="name1"
          className="block text-lg font-semibold text-purple-600 mb-2"
        >
          Name 1
        </label>
        <input
          type="text"
          id="name1"
          data-testid="name1"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          className="w-full p-3 border border-purple-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
          placeholder="Enter first name"
          disabled={!isStarted} 
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="name2"
          className="block text-lg font-semibold text-purple-600 mb-2"
        >
          Name 2
        </label>
        <input
          type="text"
          id="name2"
          data-testid="name2"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          className="w-full p-3 border border-purple-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
          placeholder="Enter second name"
          disabled={!isStarted} 
        />
      </div>

      <button
        type="submit"
        className={`w-full p-3 font-semibold rounded-lg transition duration-300 ${
          isStarted ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
        }`}
        disabled={!isStarted} 
      >
        Calculate Compatibility
      </button>

      
      {score !== null && isStarted && (
        <p
          className="mt-6 text-lg font-medium text-center text-green-600"
          data-testid="score-message"
        >
          Compatibility Score: {score}
        </p>
      )}
    </form>
  );
};

export default Form;
