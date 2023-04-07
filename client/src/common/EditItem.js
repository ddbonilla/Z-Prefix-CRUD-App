import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { inventoryContext } from "../App";

const EditItems = () => {
  const { url } = useContext(inventoryContext);
  const [details, setDetails] = useState([]);
  const { id } = useParams();

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
    <div className="flex justify-center mt-20">
      {details ? (
        <>
          {details.map((detail, i) => (
            <div className="flex flex-col">
              <p>{detail.InvId}</p>
              <p>{detail.ItemName}</p>
              <p>{detail.Description}</p>
              <p>{detail.Quantity}</p>
              <p>{detail.UserId}</p>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default EditItems;
