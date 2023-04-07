import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { inventoryContext } from "../App";
import Modal from "./Modal";

const EditItems = () => {
  const { url } = useContext(inventoryContext);
  const [details, setDetails] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    setShowModal(false);
    navigate("/inventory");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let update = {
  //     ItemName: itemName,
  //     Description: itemDesc,
  //     Quantity: itemQty,
  //     UserId: manager,
  //   };

  //   fetch(`${url}/inventory/${id}`, {
  //     method: "PUT",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(update),
  //   }).then(() => {
  //     console.log(update);
  //   });
  // };

  useEffect(() => {
    console.log("useEffect");
    fetch(`${url}/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  }, []);

  return (
    <Modal isVisible={showModal} onClose={handleClose}>
      <div className="p-6">
        {details ? (
          <>
            {details.map((detail, i) => (
              <>
                <div className="">
                  <form
                    id=""
                    className="w-full max-w-sm"
                    onSubmit={(e) => {
                      e.preventDefault();

                      let update = {
                        ItemName: detail.ItemName,
                        Description: detail.Description,
                        Quantity: detail.Quantity,
                        UserId: detail.UserId,
                      };

                      fetch(`${url}/inventory/${id}`, {
                        method: "PUT",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify([update]),
                      }).then(() => {
                        console.log(update);
                      });
                    }}
                  >
                    <div className="flex flex-col md: items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          htmlFor="name"
                          className="block text-gray-500 font-bold text-left mb-1"
                        >
                          Item Name
                        </label>
                      </div>
                      <div className="md:w-2/3 ml-5">
                        <input
                          id="name"
                          type="text"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md p-1"
                          placeholder="Item Name"
                          value={detail.ItemName}
                          onChange={(e) => setDetails(e.target.value)}
                        />
                      </div>
                      <div className="md:w-1/3">
                        <label
                          htmlFor="desc"
                          className="block text-gray-500 font-bold text-left mb-1"
                        >
                          Description
                        </label>
                      </div>
                      <div className="md:w-2/3 ml-5">
                        <input
                          id="desc"
                          type="text"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md p-1"
                          placeholder="Description"
                          value={detail.Description}
                          onChange={(e) => setDetails(e.target.value)}
                        />
                      </div>
                      <div className="md:w-1/3">
                        <label
                          htmlFor="qty"
                          className="block text-gray-500 font-bold text-left mb-1"
                        >
                          Quantity
                        </label>
                      </div>
                      <div className="md:w-2/3 ml-5">
                        <input
                          id="qty"
                          type="text"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md p-1"
                          placeholder="Description"
                          value={detail.Quantity}
                          onChange={(e) => setDetails(e.target.value)}
                        />
                      </div>
                      <div className="md:w-1/3">
                        <label
                          htmlFor="manager"
                          className="block text-gray-500 font-bold text-left mb-1"
                        >
                          Manager
                        </label>
                      </div>
                      <div className="md:w-2/3 ml-5">
                        <input
                          id="manager"
                          type="text"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md p-1"
                          placeholder="Description"
                          value={detail.UserId}
                          onChange={(e) => setDetails(e.target.value)}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </>
            ))}
          </>
        ) : null}
      </div>
    </Modal>
  );
};

export default EditItems;

// {details.map((detail, i) => (
//   <div className="flex flex-col">
//     <p key={i}>{detail.InvId}</p>
//     <p key={i + 1}>{detail.ItemName}</p>
//     <p key={i + 2}>{detail.Description}</p>
//     <p key={i + 3}>{detail.Quantity}</p>
//     <p key={i + 4}>{detail.UserId}</p>
//   </div>
// ))}
