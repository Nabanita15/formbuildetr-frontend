import Question from "./Question";

const Canvas = ({ questions, setQuestions }) => {
  const handleDelete = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div className="flex gap-3 flex-col">
     
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};

export default Canvas;
