import { useState, useEffect, useContext } from "react";
import { inventoryContext } from "../App";

const SearchBar = () => {
    const [ input, setInput ] = useState();

    const { setItems, url } = useContext(inventoryContext);
   
    useEffect(() => {
        fetch(`${url}/inventory/${input}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setItems(data);
          });
    }, []);

    return (
        <div>
        <form>
          <input 
            type="text" 
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}

          />
        </form>
      </div>
    );
}
 
export default SearchBar;