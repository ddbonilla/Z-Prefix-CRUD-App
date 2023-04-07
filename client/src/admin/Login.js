import { useContext, useState } from "react";
import { inventoryContext } from "../App";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { user, setUser, url } = useContext(inventoryContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());

    console.log(formJSON);
      
    fetch(`${url}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
        body: JSON.stringify(formJSON),
      })
      .then(res => res.json())
      .then((data) => {
        console.log("received", data);
        setUser(data)
        navigate("/inventory");
      });
    };

  return (
    <div className="w-1/3">
      <div className="p-6 w-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-5">Log in</h3>
        <form 
          method="post"
          onSubmit={handleLogin} className="space-y-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            UserName
          </label>
          <input
            type="text"
            name="Username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Username..."  
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            {" "}
            Password
          </label>
          <input
            type="password"
            name="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Password..."
            required
          />
          <button
            type="submit"
            className="w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none rounded-lg py-2.5 px-5 text-center font-medium text-small"
          >
            Log In
          </button>
          <div>
            <Link to={"/signup"} className="mt-4">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
