import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]); 

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[1]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-details">Details</label> 
      <input
        type="text"
        id="task-details"
        placeholder="New task details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="task-category">Category</label> {/* Added label for the select */}
      <select
        id="task-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories
          .filter((cat) => cat !== "All")
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
