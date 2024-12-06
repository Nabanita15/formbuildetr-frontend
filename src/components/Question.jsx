import CreateForm from "../components/CreateForm"
import Cloze from "./Cloze";
import Comprehense from "./Comprehense";

const Question = ({ question, onDelete }) => {
  return (
    <div className="bg-white shadow p-4 mb-4 rounded  border-l-8 border-blue-500">
      <h3 className="font-bold text-lg">{question.type} Question</h3>
      {/* Render based on question type */}
      {/* .......categorize ..........*/}
      {question.type === "Categorize" && <CreateForm />}
      {question.type === "Cloze" && (
        <Cloze/>
        // <input type="text" placeholder="Enter fill-in-the-blank text" />
      )}
      {question.type === "Comprehension" && (
        <Comprehense/>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Question;
