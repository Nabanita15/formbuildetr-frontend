import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { PiCirclesFourFill } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";

const CreateForm = () => {
 const [input, setInput] = useState("");
 const [itemInput, setItemInput] = useState("");
 const [categories, setCategories] = useState([]);
 const [items, setItems] = useState([]);

 const handleCategoryChange = (e) => setInput(e.target.value);
 const handleItemChange = (e) => setItemInput(e.target.value);

 const handleCategorySubmit = (e) => {
   e.preventDefault();
   if (input.trim() === "") return;
   setCategories([...categories, input]);
   setInput("");
 };

 const handleItemSubmit = (e) => {
   e.preventDefault();
   if (itemInput.trim() === "") return;
   setItems([...items, itemInput]);
   setItemInput("");
 };

 const deleteCategory = (category) => {
   setCategories(categories.filter((cat) => cat !== category));
 };

 const deleteItem = (item) => {
   setItems(items.filter((i) => i !== item));
 };

  return (
    <div className="flex gap-4 flex-col mt-3">
      <div className="flex gap-5 items-center">
        <input
          type="text"
          placeholder="Description (Optional)"
          className="flex-1 text-slate-400 text-base px-3 py-1 rounded-sm outline"
        />
        <FaImage size={25} className="text-slate-400" />
        <h1 className="text-lg font-semibold">Categorize</h1>
      </div>

      <h1 className="text-lg font-semibold">Categories</h1>
      
      {categories.map((category, index) => (
        <div className="flex gap-4 items-center" key={index}>
          <PiCirclesFourFill size={25} className="text-slate-400" />
          <div className="text-slate-400 p-1 rounded-sm  outline">
            {category}
          </div>
          <button
            onClick={() => deleteCategory(category)}
            className="text-slate-500 hover:text-slate-700"
          >
            <IoCloseOutline size={25} />
          </button>
        </div>
      ))}

      <form
        onSubmit={handleCategorySubmit}
        className="flex gap-3 items-center mb-4"
      >
        <input
          type="text"
          placeholder="Add a category"
          className="flex-1 text-slate-400 text-base px-3 py-1 rounded-sm outline"
          value={input}
          onChange={handleCategoryChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
        >
          Add Category
        </button>
      </form>

     {/**.............item and belongs........ */}
      <div className="flex flex-col gap-4">
        <h6 className="text-lg font-semibold">Item and Belongs To</h6>
        <form
          onSubmit={handleItemSubmit}
          className="flex gap-3 items-center mb-4"
        >
          <input
            type="text"
            placeholder="Add an item"
            className="flex-1 text-slate-400 text-base px-3 py-1 rounded-sm outline"
            value={itemInput}
            onChange={handleItemChange}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
          >
            Add Item
          </button>
        </form>

        <div className="flex flex-col gap-3 ">
          {items.map((item, index) => (
            <div className="flex gap-4 items-center" key={index}>
              <PiCirclesFourFill size={25} className="text-slate-400" />
              <div className="text-slate-400 p-1 rounded-sm outline">{item}</div>
              <button
                onClick={() => deleteItem(item)}
                className="text-slate-500 hover:text-slate-700"
              >
                <IoCloseOutline size={25} />
              </button>
              <select className="text-slate-400 p-1 rounded-sm outline  ">
                <option>Choose a category</option>
                <option>categorize 1</option>
                <option>categorize 2</option>
                <option>categorize 3</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
