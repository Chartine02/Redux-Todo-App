import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleComplete } from "../features/todoSlice";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoList = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.value);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo({ name: item }));

    console.log(todos);
    setItem("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div>
      <label htmlFor="" className="">
        <input
          className="h-12  rounded-md p-4 "
          type="text"
          value={item}
          placeholder="Enter todo...."
          onChange={handleChange}
        />
      </label>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul className="flex flex-col py-2 gap-4">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={`flex justify-between w-full bg-neutral-700 m- p-2 rounded-lg `}
            >
              <span
                className={`cursor-pointer  ${
                  todo.completed ? "line-through text-neutral-500" : "none"
                }`}
                onDoubleClick={() => handleComplete(todo.id)}
              >
                {todo.name}
              </span>
              <span>
                <button>
                  <MdEdit />
                </button>{" "}
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  <MdDelete />
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
