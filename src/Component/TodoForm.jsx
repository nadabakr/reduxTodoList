import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Actions";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch(addTodo(title, content));
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-dark text-white">
      <h3 className="text-primary mb-4">Add a TODO</h3>
      <form onSubmit={handleSubmission}>
        Title <br />
        <input
          type="text"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        Content <br />
        <textarea
          value={content}
          name="content"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
