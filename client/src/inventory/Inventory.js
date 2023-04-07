import { useContext, useEffect, useState } from "react";
import { inventoryContext } from "../App";
import { Link } from "react-router-dom";
import DeleteItem from "../common/DeleteItem";
import { RiDeleteBinLine } from "react-icons/ri";
// import Modal from "../common/Modal";
import EditItems from "../common/EditItems";

const Inventory = () => {
  const { items, setItems, url } = useContext(inventoryContext);
  const [totalEntries, setTotalEntries] = useState();
  // const [showModal, setShowModal] = useState(false);

  const headers = [
    { name: "Item Name" },
    { name: "Description" },
    { name: "Quantity" },
    { name: "Logged By" },
    { name: <RiDeleteBinLine /> },
  ];

  useEffect(() => {
    fetch(`${url}/inventory`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItems(data);
        setTotalEntries(data.length);
      });
  }, []);

  // console.log(items);

  return (
    <>
      <div className="col-span-6 place-items-center max-h-fit w-full border border-gray-700">
        <div className="px-9 mt-5">
          <div className="px-10 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Total Items: {totalEntries}
          </div>
          <div className="mt-2 flex flex-col">
            <div className="my-2 overflow-x-auto -mx-4 sm:mx-6 lg:mx-8">
              <div className="py-2 align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {headers.map((header, i) => (
                          <th
                            key={i}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {header.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {items.length ? (
                        items.map((item, i) => (
                          <tr key={i}>
                            <td
                              key={i}
                              className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                            >
                              <Link
                                key={i}
                                to={`/inventory/${item.InvId}`}
                                className="px-6 py-4 text-left text-xs font-medium text-blue-700 whitespace-nowrap"
                              >
                                {item.InvId} {item.ItemName}
                              </Link>
                            </td>
                            <td
                              key={i + 2}
                              className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                            >
                              {item.Description}
                            </td>
                            <td
                              key={i + 3}
                              className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                            >
                              {item.Quantity}
                            </td>
                            <td
                              key={i + 4}
                              className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                            >
                              {item.UserId}
                            </td>
                            <td
                              key={i + 5}
                              className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                            >
                              {/* <DeleteItem id={item.InvId} />
                              <button
                                key={i + 6}
                                onClick={(e) => {
                                  fetch(`${url}/inventory/${item.InvId}`, {
                                    method: "DELETE"
                                  })
                                  .then (()=> {
                                    console.log("deleted...")
                                  })
              
                                }}
                              >
                                <RiDeleteBinLine/>
                              </button> */}
                              {/* <button onClick={() => setShowModal(true)}>Edit</button> */}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <div className="p-6">
                
            </div>
          </Modal> */}
        </div>
      </div>
    </>
  );
};

export default Inventory;
