import axios from "axios";
import { useState, useEffect } from "react";

const Sidebar = ({ onAddQuestion }) => {
  const [data, setData] = useState([]);
 
  

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://formbuilder-backend-xxxv.onrender.com/api/question"
      );
      setData(response.data.data); 
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="w-1/4 border-l-2 shadow-xl p-4 h-screen fixed">
      <h2 className="text-xl font-bold mb-4">Question Types</h2>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div>
            <button
              key={index} // Use a unique identifier if available
              className="block w-full bg-blue-500 text-white p-2 rounded mb-2 hover:scale-105 transition-all"
              onClick={() => onAddQuestion(item.Categories || "Unknown Type")}
            >
              Add {item.Categories || "Unknown Type"}
            </button>
            <button
              key={index} // Use a unique identifier if available
              className="block w-full bg-blue-500 text-white p-2 rounded mb-2  hover:scale-105 transition-all"
              onClick={() => onAddQuestion(item.addCloze || "Unknown Type")}
            >
              Add {item.addCloze || "Unknown Type"}
            </button>
            <button
              key={index} // Use a unique identifier if available
              className="block w-full bg-blue-500 text-white p-2 rounded mb-2  hover:scale-105 transition-all"
              onClick={() =>
                onAddQuestion(item.Comprehanension || "Unknown Type")
              }
            >
              Add {item.Comprehanension || "Unknown Type"}
            </button>
          </div>
        ))
      ) : (
        <p>No question types available</p>
      )}
    </div>
  );
};

export default Sidebar;
