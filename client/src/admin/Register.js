import { useContext, useState } from "react";
import { inventoryContext } from "../App";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { url } = useContext(inventoryContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isManager, setIsManager] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      Username: username,
      Password: password,
      isManager: isManager,
    };

    fetch(`${url}/managers`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("new user added");
      navigate("/inventory");
    });
  };

  return (
    <div className="w-1/3">
      <div className="p-6 w-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-5">Sign Up</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            UserName
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            {" "}
            Password
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            id="isManager"
            name="isManager" 
            type="checkbox" 
            className="mr-2"
            value={true}
            onChange={(e) => setIsManager(e.target.value)}
          />
          <label htmlFor="isManager">Register as a Manager</label>
          <button
            type="submit"
            className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none rounded-lg py-2.5 px-5 text-center font-medium text-small"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
