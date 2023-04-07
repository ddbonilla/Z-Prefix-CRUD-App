import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Details = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`relative bg-emerald-800 h-screen 
        ${open ? "w-72" : "w-20"} duration-300`}
      >
        <AiOutlineCloseCircle
          className="absolute -left-3 top-9 rounded-full bg-emerald-900 text-white text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
    </>
  );
};

export default Details;
