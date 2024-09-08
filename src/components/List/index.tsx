import { Dispatch, SetStateAction } from "react";

type ListProps = {
  isStarted: boolean;
  setIsStarted: Dispatch<SetStateAction<boolean>>;
  setCombinations: Dispatch<SetStateAction<string[]>>;
  combinations: string[];
};

const List = ({ isStarted, setIsStarted, setCombinations, combinations }: ListProps) => {
  const handleStartStop = (): void => {
    if (isStarted) {
      
      setCombinations([]); 
      setIsStarted(false); 
    } else {
      setIsStarted(true); 
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
        Compatibility History
      </h2>

      <div className="space-y-2">
        {combinations.map((item: string, index: number) => (
          <h5
            key={index}
            className="text-lg font-medium text-gray-800 p-3 bg-white rounded-lg shadow-sm"
          >
            {item}
          </h5>
        ))}
      </div>

      <button
        onClick={handleStartStop}
        className={`text-lg font-medium text-gray-800 p-3 rounded-lg shadow-sm ${
          isStarted ? 'bg-red-600 hover:bg-red-400' : 'bg-green-600 hover:bg-green-400'
        }`}
      >
        {isStarted ? 'Stop and Clear' : 'Start'}
      </button>
    </div>
  );
};

export default List;
