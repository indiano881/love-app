type ListProps = {
  combinations: string[];
};

const List = ({ combinations }: ListProps) => {
  return (
    <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
        Compatibility History
      </h2>

      <div className="space-y-2">
        {combinations.length > 0 ? (
          combinations.map((item: string, index: number) => (
            <h5
              key={index}
              className="text-lg font-medium text-gray-800 p-3 bg-white rounded-lg shadow-sm"
            >
              {item}
            </h5>
          ))
        ) : (
          <p className="text-center text-gray-500">No history available.</p>
        )}
      </div>
    </div>
  );
};

export default List;
