import { useContext, useEffect, useState } from "react";
import { inventoryContext } from "../App";

import Table from "./Table";
import Details from "./Details";

const Inventory = () => {
  const { setItems, url } = useContext(inventoryContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`${url}/inventory/${input}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [input]);

  return (
    <>
      <div className="col-span-6 place-items-center max-h-fit w-full border border-gray-700">
        <div className="px-9 mt-5">
          <Table />
        </div>
      </div>
      <Details/>
    </>
  );
};

export default Inventory;
