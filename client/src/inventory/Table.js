import { useContext, useEffect } from "react";
import { inventoryContext } from "../App";
import { SlOptionsVertical } from 'react-icons/sl';

const Table = () => {
  const { items, setItems, url } = useContext(inventoryContext);

  const headers = [
    { name: "" },
    { name: "Item Name" },
    { name: "Description" },
    { name: "Quantity" },
    { name: "Logged By" },
  ];

  useEffect(() => {
    fetch(`${url}/inventory`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  },[]);

  return (
    <>
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
                {items.map((item, i) => (
                    <tr key={i}>
                      <td key={i} className="px-6 py-4 text-left text-xs font-medium text-gray-400 whitespace-nowrap">
                        <SlOptionsVertical/>
                      </td>
                      <td key={i+1} className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap">
                        {item.ItemName}
                      </td>
                      <td key={i+2} className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap">
                        {item.Description}
                      </td>
                      <td key={i+3} className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap">
                        {item.Quantity}
                      </td>
                      <td key={i+4} className="px-6 py-4 text-left text-xs font-medium text-gray-700 whitespace-nowrap">
                        {item.UserId}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
