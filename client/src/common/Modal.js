import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <>
      <div
        id="wrapper"
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        onClick={handleClose}
      >
        <div className="relative md:w-[60%] w-[90%] h-[90%] flex flex-col">
          <button
            className="text-black text=xl place-self-end absolute right-2 top-2"
            onClick={() => onClose()}
          >
            <AiOutlineCloseCircle className="text-xl text-gray-400" />
          </button>
          <div className="bg-white p-2 h-[70%] justify-center rounded">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
