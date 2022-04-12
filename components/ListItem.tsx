import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { RootState } from "../redux/store";

import { useSelector, useDispatch } from "react-redux";

import { Todo } from "../interfaces";
import { toggleStatus } from "../redux/todoslice";

type Props = {
  data: Todo;
  id: number;
};

const ListItem = ({ data, id }: Props) => {
 let todos = useSelector((state: RootState) => state.todos);

  let dispatch = useDispatch();
  let color = "bg-" + data.color;
  return (
    <div className="flex w-full items-center justify-between border-b-2  p-2 sm:p-8 py-6 border-divider">
      <div className="flex justify-start items-center">
        <span onClick={()=>dispatch(toggleStatus(id))} className="mr-4">
          {data.status === "completed" ? (
            <div className="w-8 h-8 bg-ucblue rounded-3xl flex items-center justify-center border-ucblue border-2">
              <FaCheck color="white" size={12} />
            </div>
          ) : (
            <div className=" w-8 h-8 border-ucblue rounded-3xl border-2 bg-stbg"></div>
          )}
        </span>
        <span className=" text-blk">{data.description}</span>
      </div>
      <div className={` w-4.5 rounded-md h-4.5 ${color}`}></div>
    </div>
  );
};

export default ListItem;
