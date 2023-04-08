import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { inventoryContext } from "../App";
import Modal from "../common/Modal";
import { FaTrash } from "react-icons/fa";

const EditItems = () => {
  const { user, url } = useContext(inventoryContext);
  const [details, setDetails] = useState([]);
  const [tempDetails, setTempDetails] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [changed, setChanged] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("details", details);
  //   console.log("temp", tempDetails);
  //   console.log("change", changed);
  // });

  const handleClose = () => {
    setShowModal(false);
    navigate("/inventory");
  };

  useEffect(() => {
    fetch(`${url}/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data[0]);
        setTempDetails(data[0]);
      });
  }, []);

  const handleUpdate = () => {
    fetch(`${url}/inventory/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tempDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setChanged(false);
        console.log(data);
      })
      .catch();
  };

  return (
    <Modal isVisible={showModal} onClose={handleClose}>
      <div>
        <div className="font-semibold text-emerald-700 text-xl px-4">
          Manager: {user.Username}
        </div>
        <hr className="p-2 m-4" />
      </div>
      <div>
        <div className="grid px-5 mb-4">
          <label htmlFor="name" className="w-1/2 font-semibold">
            Item Name
          </label>
          <input
            name="name"
            className="w-full bg-slate-300 p-2 rounded-md"
            type="text"
            value={tempDetails.ItemName}
            onChange={(e) => {
              setChanged(true);
              setTempDetails({ ...tempDetails, ItemName: e.target.value });
            }}
          />
        </div>
        <div className="grid px-5 mb-4">
          <label htmlFor="type" className="w-1/2 font-semibold">
            Item Type
          </label>
          <input
            name="type"
            className="w-full bg-slate-300 p-2 rounded-md"
            type="text"
            value={tempDetails.Type}
            onChange={(e) => {
              setChanged(true);
              setTempDetails({ ...tempDetails, Type: e.target.value });
            }}
          />
        </div>
        <div className="grid px-5 mb-4">
          <label htmlFor="desc" className="w-1/2 font-semibold">
            Item Description
          </label>
          <textarea
            name="desc"
            className="w-full h-20 bg-slate-300 p-2 rounded-md"
            value={tempDetails.Description}
            onChange={(e) => {
              setChanged(true);
              setTempDetails({ ...tempDetails, Description: e.target.value });
            }}
          />
        </div>
        <div className="grid px-5 mb-4">
          <label htmlFor="qty" className="w-1/2 font-semibold">
            Quantity
          </label>
          <input
            name="qty"
            className="w-full bg-slate-300 p-2 rounded-md"
            type="text"
            value={tempDetails.Quantity}
            onChange={(e) => {
              setChanged(true);
              setTempDetails({ ...tempDetails, Quantity: e.target.value });
            }}
          />
        </div>
        <div className="flex justify-between px-2">
          <div className="flex ml-4 gap-2">
            {changed ? (
              <>
                <div className="bg-emerald-400 rounded-md w-20 text-center hover:bg-emerald-300">
                  <button className="my-2 mx-4" onClick={handleUpdate}>
                    Save
                  </button>
                </div>
                <div className="bg-slate-400 rounded-md w-20 text-center hover:bg-slate-300">
                  <button
                    className="my-2 mx-4"
                    onClick={(e) => {
                      setTempDetails({ ...details });
                      setChanged(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : null}
          </div>
          <div className="bg-red-700 rounded-md hover:bg-red-600">
            <button
              onClick={() => {
                fetch(`${url}/inventory/${details.InvId}`, {
                  method: "DELETE",
                }).then(() => {
                  console.log("deleted...");
                  setShowModal(false);
                  navigate("/inventory");
                });
              }}
            >
              <FaTrash className="text-lg text-slate-100 my-2 mx-4" />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditItems;
