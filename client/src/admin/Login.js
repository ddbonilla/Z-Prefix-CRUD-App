import { useContext } from "react";
import { inventoryContext } from "../App";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { setUser, url } = useContext(inventoryContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());

    fetch(`${url}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formJSON),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        navigate("/inventory");
      });
  };

  return (
    <div className="w-3/6 bg-slate-700">
      <div className="p-6 w-full">
        <h3 className="text-2xl text-center font-semibold text-slate-200 mb-1">Log in</h3>
        <hr className="mb-4"/>
        <form method="post" onSubmit={handleLogin} className="space-y-4">
          <label className="block mb-2 text-sm font-medium text-slate-100">
            UserName
          </label>
          <input
            type="text"
            name="Username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Username..."
            required
          />
          <label className="block mb-2 text-sm font-medium text-slate-100">
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
            className="w-full text-white bg-emerald-600 hover:bg-emerald-500 focus:ring-4 focus:outline-none rounded-lg py-2.5 px-5 text-center font-medium text-small"
          >
            Log In
          </button>
          <div>
            <Link to={"/signup"} className="mt-4 float-right text-emerald-500">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
