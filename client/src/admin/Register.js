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
      navigate("/login");
    });
  };

  return (
    <div className="w-3/6 bg-slate-700">
      <div className="p-6 w-full">
        <h3 className="text-2xl text-center font-semibold text-slate-100 mb-5">Register</h3>
        <hr className="mb-4"/>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block mb-2 text-sm font-medium text-slate-100">
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
          <label className="block mb-2 text-sm font-medium text-slate-100">
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
          <label htmlFor="isManager" className="mt-4 text-emerald-500">Register as a Manager</label>
          <button
            type="submit"
            className="w-full text-white bg-slate-800 hover:bg-gray-600 focus:ring-4 focus:outline-none rounded-lg py-2.5 px-5 text-center font-medium text-small"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
