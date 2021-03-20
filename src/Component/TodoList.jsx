import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../Redux/Actions";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);

  const dispatch = useDispatch();
  const deleteTask = (index) => {
    dispatch(deleteTodo(index));
  };
  const todos =
    todoList && todoList.length > 0 ? (
      todoList.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border d-flex justify-content-between px-5 py-2">
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
              <button
                onClick={() => deleteTask(i)}
                className="btn btn-danger text-white px-3 "
              >
                X
              </button>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todos}
    </div>
  );
};

export default TodoList;
