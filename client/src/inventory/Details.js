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
        <div className="px-2">Inventory Item</div>
        <hr className="p-2" />
      </div>
      <div className="">
        <p className="m-2 block px-2 w-full">{details.ItemName}</p>
        <p className="m-2 block px-2 w-full">{details.Type}</p>
        <p className="m-2 block px-2 w-full">{details.Description}</p>
        <p className="m-2 block px-2 w-full">{details.Quantity}</p>
      </div>
    </Modal>
  );
};

export default Details;
