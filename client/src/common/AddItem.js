import { useContext, useEffect, useState } from "react";
import { inventoryContext } from "../App";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const { url } = useContext(inventoryContext);
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemQty, setItemQty] = useState(1);
  const [manager, setManager] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let entry = {
      UserId: manager,
      ItemName: itemName,
      Description: itemDesc,
      Quantity: itemQty,
    };

    setIsPending(true);

    fetch(`${url}/inventory`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(entry),
    }).then(() => {
      console.log("new item added");
      setIsPending(false);
      navigate('/inventory');
    });
  };

  return (
    <div className="flex justify-center mt-20">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={itemName}
            placeholder="Item Name"
            onChange={(e) => setItemName(e.target.value)}
            required
          />
          <input
            type="text"
            value={itemDesc}
            placeholder="Description"
            onChange={(e) => setItemDesc(e.target.value)}
            required
          />
          <input
            type="text"
            value={itemQty}
            placeholder="Quantity"
            onChange={(e) => setItemQty(e.target.value)}
            required
          />
          <input
            type="text"
            value={manager}
            placeholder="Logged By"
            onChange={(e) => setManager(e.target.value)}
            required
          />
          {!isPending && (
            <button
              type="submit"
              className="bg-emerald-500 rounded-md text-xs p-2"
            >
              Submit
            </button>
          )}
          {isPending && (
            <button disabled className="bg-emerald-500 rounded-md text-xs p-2">
              Submitting...
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddItem;
