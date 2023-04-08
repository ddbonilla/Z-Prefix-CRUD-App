import { useContext, useEffect, useState } from "react";
import { inventoryContext } from "../App";
import { Link } from "react-router-dom";

const Inventory = () => {
  const { user, items, setItems, url } = useContext(inventoryContext);
  const [totalEntries, setTotalEntries] = useState();

  const headers = [
    { name: "Item Name" },
    { name: "Type" },
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
      <div className="flex max-h-fit w-full">
        <div className="px-9 mt-5">
          <div className="p-5 rounded-md bg-slate-700 shadow-md">
            <div className="inline-flex justify-between">
              <h3 className="font-semibold text-slate-200">
                Basic Organizational Worksheet Log
                <span className="text-xs ml-1">v. 1.0</span>
              </h3>
            </div>
            {!user.Username ? null : (
              <div className="italic text-sm text-emerald-300 mt-4">
                Inventory Manager:{" "}
                <span className="font-semibold">{user.Username}</span>
              </div>
            )}
            <hr className="p-2" />
          </div>
          <div className="mt-2 flex flex-col shadow-lg rounded-md w-fit bg-slate-600">
            <div className="my-2 overflow-x-auto -mx- sm:mx-6 lg:mx-2">
              <div className="px-10 text-right text-xs font-medium text-gray-100 uppercase tracking-wider">
                Total Items: {totalEntries}
              </div>
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
                                className="py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
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
                                className="desc px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                {item.Type}
                              </td>
                              <td
                                key={i + 3}
                                className="desc px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                {item.Description.substring(0, 100) + "..."}
                              </td>
                              <td
                                key={i + 4}
                                className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                {item.Quantity}
                              </td>
                              <td
                                key={i + 5}
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
                                key={i}
                                className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                <Link
                                  key={i}
                                  to={`/details/${item.InvId}`}
                                  className="px-6 py-4 text-left text-xs font-medium text-blue-700 whitespace-nowrap"
                                >
                                  {item.ItemName}
                                </Link>
                              </td>
                              <td
                                key={i + 2}
                                className="desc px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                {item.Type}
                              </td>
                              <td
                                key={i + 3}
                                className="desc px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                {item.Description.substring(0, 100) + "..."}
                              </td>
                              <td
                                key={i + 4}
                                className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                              >
                                {item.Quantity}
                              </td>
                              <td
                                key={i + 5}
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
        </div>
      </div>
    </>
  );
};

export default Inventory;
