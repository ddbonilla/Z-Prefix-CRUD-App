import { useContext } from "react";
import { inventoryContext } from "../App";
import { useNavigate } from "react-router-dom";

import { RiDeleteBinLine } from "react-icons/ri";

const DeleteItem = ({id}) => {
    const { url } = useContext(inventoryContext);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(`${url}/inventory/${id}`, {
            method: "DELETE"
        })
        .then (() => {
            console.log('item deleted')
            navigate('/inventory')

        })
    }
    return (
        <>
            <button
                className=""
                onClick={handleClick}
            >
            <RiDeleteBinLine/>
            </button>
        </>
    );
}
 
export default DeleteItem;