import {useState } from "react";
import Modal from "../common/Modal";

const Login = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">Title</h3>
          <form 
            className="space-y-6"
          >
            <label className="block mb-2 text-sm font-medium text-gray-900">UserName</label>
            <input 
              type="text" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Username..."
              required
            />
            <label className="block mb-2 text-sm font-medium text-gray-900"> Password</label>
            <input 
              type="text" 
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
          </form>
        </div>
      </Modal>
        
    );
}
 
export default Login;
