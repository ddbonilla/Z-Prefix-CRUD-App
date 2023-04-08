import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { inventoryContext } from "../App";
import Modal from "../common/Modal";
import { RiDeleteBinLine } from "react-icons/ri";

const EditItems = () => {
  const { user, url } = useContext(inventoryContext);
  const [details, setDetails] = useState([]);
  const [tempDetails, setTempDetails] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [changed, setChanged] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("details", details);
    console.log("temp", tempDetails);
    console.log("change", changed);
  });

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
      body: JSON.stringify(tempDetails)
    })
      .then(res => res.json())
      .then((data)=> {
        console.log(data);
      })
      .catch();
  };

  return (
    <Modal isVisible={showModal} onClose={handleClose}>
      <div>
        <div>{user.Username}</div>
        <hr className="p-2" />
      </div>
      <div className="">
        <input
          className="m-2 block px-2 w-full border border-1"
          type="text"
          value={tempDetails.ItemName}
          onChange={(e) => {
            setChanged(true);
            setTempDetails({ ...tempDetails, ItemName: e.target.value });
          }}
        />
        <input
          className="m-2 block px-2 w-full"
          type="text"
          value={tempDetails.Type}
          onChange={(e) => {
            setChanged(true);
            setTempDetails({ ...tempDetails, Type: e.target.value });
          }}
        />
        <textarea
          className="m-2 block px-2 w-full"
          type="text"
          value={tempDetails.Description}
          onChange={(e) => {
            setChanged(true);
            setTempDetails({ ...tempDetails, Description: e.target.value });
          }}
        />
        <input
          className="m-2 block px-2 w-full"
          type="text"
          value={tempDetails.Quantity}
          onChange={(e) => {
            setChanged(true);
            setTempDetails({ ...tempDetails, Quantity: e.target.value });
          }}
        />
        <div className="inline-flex float-right px-2">
          {changed ? (
            <div className="">
              <button className="mx-2" onClick={handleUpdate}>
                Save
              </button>
              <button
                className="mx-2"
                onClick={(e) => {
                  setTempDetails({ ...details });
                  setChanged(false);
                }}
              >
                Cancel
              </button>
            </div>
          ) : null}
          <div className="mx-2">
            <button>
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditItems;
