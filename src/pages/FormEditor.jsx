import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";

const FormEditor = () => {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (type) => {
    setQuestions([...questions, { type }]);
  };

  return (
    <div className="flex  h-screen">
      <div className="w-1/3">
      <Sidebar onAddQuestion={handleAddQuestion} />
      </div>
      <div className="w-full p-4">
       
        <Canvas questions={questions} setQuestions={setQuestions} />
      </div>
    </div>
  );
};

export default FormEditor;
