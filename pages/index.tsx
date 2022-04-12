import { set } from "immer/dist/internal";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "../components/ListItem";
import { Todo, Filter } from "../interfaces";
import { RootState } from "../redux/store";
import { addTodo, initializeTodos } from "../redux/todoslice";

const IndexPage = () => {
  let dispatch = useDispatch();
  let todos = useSelector((state: RootState) => state.todos);
  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log("stored todos", storedTodos);
    if (storedTodos !== null) {
      dispatch(initializeTodos(storedTodos));
    } else {
      dispatch(initializeTodos([]));
    }
  }, []);

  const [input, setInput] = useState<Todo>({
    color: "",
    description: "",
    status: "open",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput({ ...input, description: e.currentTarget.value });
  };

  const [filter, setfilter] = useState<Filter>("all");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  const addTodoId = () => {
    console.log(todos, "todos ooo");
    if (todos && todos.length > 0) {
      console.log("I excetue");
      let td = [...todos];
      return td.map((todo, id) => {
        return { ...todo, todoId: id };
      });
    } else {
      return [];
    }
  };

  const filterfn = (str) => {
    let td = addTodoId();
    if (td.length > 0) {
      if (str != "all") {
        let ftd = [...td];

        setFilteredTodos(ftd.filter((todo) => todo.color === str));
      } else {
        setFilteredTodos(td);
      }
    }
  };

  useEffect(() => {
    filterfn(filter);
    console.log(filteredTodos);
  }, [todos, filter]);

  const handleAdd = (color) => {
    if (input.description) {
      dispatch(addTodo({ ...input, color: color }));
    } else {
      alert("Please Input a description for the todo");
    }
  };

  const formatdate = () => {
    let date = new Date().toString();

    return date.slice(0, 3) + "," + date.slice(3, 15);
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center p-4">
      <div className="w-full sm:w-3/5  lg:w-3/5 xl:w-2/5">
        <div className=" bg-tomat   text-white text-md sm:text-lg p-4 sm:p-5 rounded-t-3xl flex justify-center items-center">
          <span> Today {formatdate()}</span>
        </div>
        <div className=" flex-wrap p-2 sm:p-6 flex sticky top-5 items-center justify-between bg-bgblack border-b-2   border-divider">
          <span className=" text-tomat text-xxs sm:text-base">
            {`${filter != "all" ? `Filtering and ` : ""} 
                Showing ${filteredTodos?.length} task${
              filteredTodos?.length > 1 ? "s" : ""
            }`}
          </span>
          <span className="flex">
            <div
              onClick={() => {
                setfilter("all");
              }}
              className={` w-8 h-8 cursor-pointer flex text-xs text-tomat justify-center items-center bg-gray-300 rounded-xl mr-2 ${
                filter === "all" ? " border-tomat border-3" : ""
              } `}
            >
              <span>All</span>
            </div>
            <div
              onClick={() => {
                setfilter("pirp");
              }}
              className={` w-8 h-8 cursor-pointer bg-pirp rounded-xl mr-2 ${
                filter === "pirp" ? " border-border border-4" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                setfilter("grin");
              }}
              className={` w-8 h-8 cursor-pointer bg-grin rounded-xl ${
                filter === "grin" ? " border-border border-4" : ""
              }`}
            ></div>
          </span>
        </div>
        <div>
          {filteredTodos.length > 0 &&
            filteredTodos.map((todo) => (
              <ListItem
                key={`${todo.todoId + Math.random()}`}
                data={todo}
                id={todo.todoId}
              />
            ))}
        </div>

        <div className="flex px-1 flex-wrap sm:px-6 pt-4 w-full justify-between items-center ">
          <FaPlus className=" text-tomat text-sm " />
          <input
            type="text"
            value={input.description}
            onChange={handleChange}
            className=" focus:border-b-tomat w-20 border-0  mx-2 px-2 py-1 outline-none flex-1"
            placeholder="Add a task"
          />
          <span className="flex">
            <div
              className=" w-8 h-8 bg-pirp rounded-xl mr-2"
              onClick={() => handleAdd("pirp")}
            ></div>
            <div
              onClick={() => handleAdd("grin")}
              className=" w-8 h-8 bg-grin rounded-xl"
            ></div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
