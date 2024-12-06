import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Comprehense = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    paragraphArea: "",
    paragraphQuestion:"",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });

  // Handle change event for radio buttons
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form data
  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://formbuilder-backend-xxxv.onrender.com/api/comprehension",
        form
      );
      alert("Question added successfully!");
      fetchData(); // Refresh data

    } catch (error) {
      console.error("Failed to save the question:", error);
    }
  };

  // Fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://formbuilder-backend-xxxv.onrender.com/api/comprehension"
      );
      setData(response.data); // Adjust this based on your backend response
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  // delete data
 const handleDelete = async (id) => {
   try {
     await axios.delete(
       `https://formbuilder-backend-xxxv.onrender.com/api/comprehension/${id}`
     );
     console.log("delete");
     fetchData(); 
   } catch (error) {
     console.log("fghjkl;lkjhg");
     console.error("Failed to delete the question:", error);
   }
 };
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="gap-4 flex flex-col mt-3">
      <textarea
        placeholder="Enter passage"
        className="w-full border-gray-300 border-2 text-slate-400 p-4 rounded-sm"
      ></textarea>

      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary w-20"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 font-bold" id="exampleModalLabel">
                MCQ QUESTION
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="flex gap-3 flex-col">
                <label className="text-base font-semibold ">
                  Write the MCQ question:
                </label>
                <input
                  type="text"
                  name="paragraphQuestion"
                  className="border-2 p-1 rounded-md"
                  value={form.paragraphQuestion}
                  onChange={handleFormChange}
                />
                <label className="text-base font-semibold ">
                  Write the MCQ options:
                </label>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="question1"
                    className="border-2 p-2"
                    placeholder="Enter the option 1"
                    value={form.question1}
                    onChange={handleFormChange}
                  />
                  <input
                    type="text"
                    name="question2"
                    className="border-2 p-2"
                    placeholder="Enter the option 2"
                    value={form.question2}
                    onChange={handleFormChange}
                  />
                  <input
                    type="text"
                    name="question3"
                    className="border-2 p-2"
                    placeholder="Enter the option 3"
                    value={form.question3}
                    onChange={handleFormChange}
                  />
                  <input
                    type="text"
                    name="question4"
                    className="border-2 p-2"
                    placeholder="Enter the option 4"
                    value={form.question4}
                    onChange={handleFormChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary w-20"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="border-2 text-slate-400 rounded-md flex p-4 flex-col gap-4">
        <div className="bg-blue-500 px-4 py-2 text-white rounded-3xl w-24 text-center mx-auto">
          MCQ
        </div>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="flex flex-col ju" key={index}>
              <h3 className="mb-3">
                <span>Q{index + 1} .</span>
                {item.paragraphQuestion}
              </h3>

              {/* Radio button group */}
              <div className="flex gap-4 flex-col">
                <label className="flex items-center">
                  <input
                    type="radio"
                    // name={`question-${index}`} // Unique name for each question group
                    value="question1"
                    checked={selectedOption === "question1"}
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  {item.question1}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="question2"
                    checked={selectedOption === "question2"}
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  {item.question2}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="question3"
                    checked={selectedOption === "question3"}
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  {item.question3}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="question4"
                    checked={selectedOption === "question4"}
                    onChange={handleRadioChange}
                    className="mr-2"
                  />
                  {item.question4}
                </label>
              </div>
              <button className="mx-auto" onClick={() => handleDelete(item._id)}>
                <MdOutlineDeleteOutline size={25} />
              </button>
            </div>
          ))
        ) : (
          <p>No question types available</p>
        )}
      </div>
    </div>
  );
};

export default Comprehense;
