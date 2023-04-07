import { useContext, useState } from "react";
import { inventoryContext } from "../App";
import { useNavigate } from "react-router-dom";
import { VscSaveAs } from "react-icons/vsc";

const AddItem = () => {
  const { user, url } = useContext(inventoryContext);
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemQty, setItemQty] = useState(1);
  const [manager, setManager] = useState("");

  console.log(user);

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
      navigate("/inventory");
    });
  };

  return (
    <div className="p-8 col-span-2 place-items-center h-screen w-full">
      <div className="italic text-sm">
        Inventory Manager:{" "}
        <span className="font-semibold">{user.Username}</span>
      </div>
      <hr className="p-2" />
      <div className="flex items-center justify-start py-12 px-4">
        <div className="max-w-full w-full space-y-8">
          <div className="mb-10">
            <h2 className="m-2 text-left text-3xl font-extrabold">
              Add New Item
            </h2>
            <hr />
            <div className="flex justify-start">
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col">
                <div className="flex gap-4 text-right">
                  <label htmlFor="name" className="w-full">
                    Item Name
                  </label>
                  <input
                    type="text"
                    placeholder="Item Name..."
                    className="rounded-md bg-gray-100 border-gray-300 max-w-full mb-2 px-2"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-4 text-right">
                  <label htmlFor="desc" className="w-full">
                    Item Description
                  </label>
                  <input
                    type="text"
                    placeholder="Description..."
                    className="rounded-md bg-gray-100 border-gray-300 max-w-full mb-2 px-2"
                    value={itemDesc}
                    onChange={(e) => setItemDesc(e.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-4 text-right">
                  <label htmlFor="qty" className="w-full">
                    Item Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="Quantity..."
                    className="rounded-md bg-gray-100 border-gray-300 max-w-full mb-2 px-2"
                    value={itemQty}
                    onChange={(e) => setItemQty(e.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-4 text-right">
                  <label htmlFor="manager" className="w-full">
                    Logged By
                  </label>
                  <input
                    type="text"
                    placeholder="Manager..."
                    className="rounded-md bg-gray-100 border-gray-300 max-w-full mb-2 px-2"
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                  />
                </div>
                <div className="text-right m-4 text-lg min-w-fit">
                  {!isPending && (
                    <button
                      type="submit"
                      className="bg-emerald-400 p-3 rounded-md"
                    >
                      <VscSaveAs />
                    </button>
                  )}
                  {isPending && (
                    <button disabled className="bg-emerald-400 p-3 rounded-md">
                      Saving...
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
