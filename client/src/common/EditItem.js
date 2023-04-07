import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { inventoryContext } from "../App";

const EditItems = () => {
  const { items, setItems, url } = useContext(inventoryContext);
  const params = useParams();



  useEffect(() => {
    fetch(`${url}/inventory/${params.id}`)
    .then((res) => res.json())
    .then((data)=> {
        console.log("look", data);
        setItems(data);
    })
  },[params.id]);

  return (
    <div className="flex justify-center mt-20">
      <div>{params.id}</div>
    </div>
  );
};

export default EditItems;
