import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { inventoryContext } from "../App";
import Modal from "../common/Modal";
import { RiDeleteBinLine } from "react-icons/ri";

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
              <div key={i+20}>
                <div key={i}>
                  <form
                    key={i+1}
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
                    <div
                      key={i+2}
                      className="flex flex-col md: items-center mb-6"
                    >
                      <div key={i+3} className="md:w-1/3">
                        <label
                          key={i+4}
                          htmlFor="name"
                          className="block text-gray-500 font-bold text-left mb-1"
                        >
                          Item Name
                        </label>
                      </div>
                      <div key={i+5} className="md:w-2/3 ml-5">
                        <input
                          key={i+6}
                          id="name"
                          type="text"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md p-1"
                          placeholder="Item Name"
                          value={detail.ItemName}
                          onChange={(e) => setDetails(e.target.value)}
                        />
                      </div>
                      <div key={i+7} className="md:w-1/3">
                        <label
                          key={i+8}
                          htmlFor="desc"
                          className="block text-gray-500 font-bold text-left mb-1"
                        >
                          Description
                        </label>
                      </div>
                      <div key={i+9} className="md:w-2/3 ml-5">
                        <input
                          key={i+10}
                          id="desc"
                          type="text"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md p-1"
                          placeholder="Description"
                          value={detail.Description}
                          onChange={(e) => setDetails(e.target.value)}
                        />
                      </div>
                      <div key={i+11} className="md:w-1/3">
                        <label
                          key={i+12}
                          htmlFor="qty"
                          className="block text-gray-500 font-bold text-left mb-1"
                        >
                          Quantity
                        </label>
                      </div>
                      <div key={i+13} className="md:w-2/3 ml-5">
                        <input
                          key={i+14}
                          id="qty"
                          type="text"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md p-1"
                          placeholder="Description"
                          value={detail.Quantity}
                          onChange={(e) => setDetails(e.target.value)}
                        />
                      </div>
                      <div key={i+15} className="md:w-1/3">
                        <label
                          key={i+16}
                          htmlFor="manager"
                          className="block text-gray-500 font-bold text-left mb-1"
                        >
                          Manager
                        </label>
                      </div>
                      <div key={i+17} className="md:w-2/3 ml-5">
                        <input
                          key={i+18}
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
                  <button
                    key={i + 19}
                    onClick={() => {
                      fetch(`${url}/inventory/${detail.InvId}`, {
                        method: "DELETE",
                      }).then(() => {
                        console.log("deleted...");
                        setShowModal(false);
                        navigate("/inventory");
                      });
                    }}
                  >
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </Modal>
  );
};

export default EditItems;
