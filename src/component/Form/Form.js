import { useState } from "react";

const Form = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please Add To");
      return;
    }
    onAdd({ text, isComplete });

    setText("");
    setIsComplete(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Todo</label>
        <input
          type="text"
          placeholder="Add a Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Completed </label>
        <input
          type="checkbox"
          checked={isComplete}
          value="isComplete"
          onChange={(e) => setIsComplete(e.currentTarget.checked)}
        />
      </div>
      <input className="btn" type="submit" value="Save Todo" />
    </form>
  );
};

export default Form;
