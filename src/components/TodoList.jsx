import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoList = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.value);

  const handlechange = (e) => {
    setItem(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(item));
  };

  return (
    <div>
      <label htmlFor="" className="">
        <input
          className="h-12  rounded-md p-4 "
          type="text"
          value={item}
          placeholder="Enter todo...."
          onChange={handlechange}
        />
      </label>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul className="flex flex-col py-2 gap-4">
        {todos.map((todo, i) => {
          return (
            <li
              key={todo[i]}
              className="flex justify-between w-full bg-neutral-700 m- p-2 rounded-lg "
            >
              {todo}
              <span>
                <button>
                  <MdEdit />
                </button>{" "}
                <button>
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
