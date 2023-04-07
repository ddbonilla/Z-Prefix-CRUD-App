import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Details = () => {
  const [open, setOpen] = useState(true);

  const {id} = useParams();

  return (
    <>
      <div
        className={`relative bg-emerald-800 h-screen 
        ${open ? "w-96 " : "w-20"} duration-300`}
      >
        <AiOutlineCloseCircle
          className="absolute -left-3 top-9 rounded-full bg-emerald-900 text-white text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <div 
          className="mt-20 p-4 text-white font-medium text-lg"
        >
          {id}
        </div>
      </div>
    </>
  );
};

export default Details;
