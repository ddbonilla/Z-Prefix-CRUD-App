import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { inventoryContext } from "../App";
import Modal from "../common/Modal";

const Details = () => {
  const { user, url } = useContext(inventoryContext);
  const [details, setDetails] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    setShowModal(false);
    navigate("/inventory");
  };

  useEffect(() => {
    fetch(`${url}/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data[0]);
      });
  }, []);

  return (
    <Modal isVisible={showModal} onClose={handleClose}>
      <div>
        <div className="font-semibold text-emerald-700 text-xl px-4">
          Inventory Item
        </div>
        <hr className="p-2 m-4" />
      </div>
      <div>
        <div className="grid px-5 mb-4">
          <label htmlFor="name" className="w-1/2 font-semibold">
            Item Name
          </label>
          <p className="w-full bg-emerald-200 p-2 rounded-md">{details.ItemName}</p>
        </div>
        <div className="grid px-5 mb-4">
          <label htmlFor="type" className="w-1/2 font-semibold">
            Item Type
          </label>
          <p className="w-full bg-emerald-200 p-2 rounded-md">{details.Type}</p>
        </div>
        <div className="grid px-5 mb-4">
          <label htmlFor="desc" className="w-1/2 font-semibold">
            Item Description
          </label>
          <p className="w-full bg-emerald-200 p-2 rounded-md">{details.Description}</p>
        </div>
        <div className="grid px-5 mb-4">
          <label htmlFor="qty" className="w-1/2 font-semibold">
            Item Quantity
          </label>
          <p className="w-full bg-emerald-200 p-2 rounded-md">{details.Quantity}</p>
        </div>
      </div>
    </Modal>
  );
};

export default Details;
