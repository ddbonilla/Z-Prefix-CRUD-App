import { useContext, useEffect, useState } from "react";
import { inventoryContext } from "../App";
import { Link } from "react-router-dom";
// import Modal from "../common/Modal";

const Inventory = () => {
  const { user, items, setItems, url } = useContext(inventoryContext);
  const [totalEntries, setTotalEntries] = useState();
  // const [showModal, setShowModal] = useState(false);

  const headers = [
    { name: "Item Name" },
    { name: "Description" },
    { name: "Quantity" },
    { name: "Logged By" },
  ];

  useEffect(() => {
    fetch(`${url}/inventory`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setTotalEntries(data.length);
      });
  }, []);

  return (
    <>
      <div className="col-span-6 place-items-center max-h-fit w-full border border-gray-700">
        <div className="px-9 mt-5">
          {!user.Username ? null : (
            <div className="italic text-sm">
              Inventory Manager:{" "}
              <span className="font-semibold">{user.Username}</span>
            </div>
          )}
          <hr className="p-2" />
          <div className="px-10 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Total Items: {totalEntries}
          </div>
          <div className="mt-2 flex flex-col">
            <div className="my-2 overflow-x-auto -mx-4 sm:mx-6 lg:mx-8">
              <div className="py-2 align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-200">
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
                    {user.Username ? (
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
                                  {item.ItemName}
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
                                {item.Username}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <></>
                        )}
                      </tbody>
                    ) : (
                      <tbody className="bg-white divide-y divide-gray-200">
                        {items.length ? (
                          items.map((item, i) => (
                            <tr key={i}>
                              <td
                                key={i+1}
                                className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                {item.ItemName}
                              </td>
                              <td
                                key={i+2}
                                className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                {item.Description}
                              </td>
                              <td
                                key={i+3}
                                className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                {item.Quantity}
                              </td>
                              <td
                                key={i+4}
                                className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                {item.Username}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <></>
                        )}
                      </tbody>
                    )}
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
