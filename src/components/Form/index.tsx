"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { calculateCompatibilityScore } from "../../../utils/function";

type FormProps = {
  combinations: string[];
  setCombinations: Dispatch<SetStateAction<string[]>>;
};

const Form = ({ combinations, setCombinations }: FormProps) => {
  const [name1, setName1] = useState<string>("");
  const [name2, setName2] = useState<string>("");
  const [number, setNumber] = useState<number | null>(null);
  const [meal, setMeal] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name1 && name2) {
      calculateCompatibilityScore(name1, name2, async (newNumber: number) => {
        setNumber(newNumber);

        try {
          // Fetch a random meal from the API
          const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
          const data = await response.json();
          const mealName = data.meals[0].strMeal;
          setMeal(mealName);

          const newSingleInfo = `${name1} + ${name2} = ${newNumber}, Random Meal: ${mealName}`;
          setCombinations([...combinations, newSingleInfo]);
        } catch (error) {
          console.error("Error fetching the meal:", error);
        }
      });

      setName1("");
      setName2("");
    }
  };

  return (
    <form
      className="bg-pink-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-12"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
        Compatibility Form
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
          value={name1}
          data-testid="name1"
          onChange={(e) => setName1(e.target.value)}
          className="w-full p-3 border border-purple-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
          placeholder="Enter first name"
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
          value={name2}
          data-testid="name2"
          onChange={(e) => setName2(e.target.value)}
          className="w-full p-3 border border-purple-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
          placeholder="Enter second name"
        />
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Calculate Compatibility
      </button>

      {number !== null && (
        <p
          className="mt-6 text-lg font-medium text-center text-green-600"
          data-testid="score-message"
        >
          Compatibility Score: {number}
        </p>
      )}

      {meal && (
        <p
          className="mt-6 text-lg font-medium text-center text-blue-600"
          data-testid="meal-message"
        >
          Food for best date: {meal}
        </p>
      )}
    </form>
  );
};

export default Form;
