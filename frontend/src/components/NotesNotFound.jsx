import { NotebookIcon, PenIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const NotesNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-auto flex items-center justify-center">
      <div>
        <div className="flex">
          <h1 className="text-5xl">
            Create Your{" "}
            <span className="font-bold capitalize shadow-amber-800 shadow-2xl ">
              First
            </span>{" "}
            Note
          </h1>
          <NotebookIcon className="size-20 ml-3" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="p-4 bg-green-600 rounded-full flex items-center justify-center shadow-amber-900 shadow-2xl hover:bg-green-700 transition-all ease-in - duration-50 hover:shadow-amber-600
           ">
            <button
              className=" text-3xl font-semibold mr-2 "
              onClick={() => navigate("/create")}>
              Create
            </button>
            <PenIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesNotFound;
