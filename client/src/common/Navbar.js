import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../common/Modal";

//icons
import { FaBowlingBall } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const links = [
    { name: "Inventory", to: "/", icon: "" },
    { name: "New Item", to: "/", icon: "" },
  ];

  const loginLink = (
    <Link
      to="Login"
      className={
        "text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white"
      }
    >
      <RiDashboardFill className="text-xl block float-left" />
      <span
        className={`text-base font-medium flex-1 ${
          !open && "hidden"
        } duration-300`}
      >
        Login
      </span>
    </Link>
  );

  return (
    <>
      <div
        className={`relative bg-emerald-800 h-screen 
        ${open ? "w-72" : "w-20"} duration-300`}
      >
        <FaBowlingBall
          className={`absolute -right-3 top-9 rounded-full bg-emerald-900 text-white text-3xl 
            cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <h1
            className={`brand text-white text-4xl font-medium origin-left p-6
                ${!open && "scale-0"} duration-300`}
          >
            Inventory
          </h1>
        </div>
        <hr className="mx-4 border-1" />
        <div className="p-4">
          {links.map((link, i) => (
            <div key={Math.random()}>
              <Link
                key={i}
                to={link.name}
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2
                        hover:bg-light-white ${link.spacing ? "mt-9" : "mt-2"}`}
              >
                <span key={i} className={`text-xl block float-left`}>
                  {link.icon ? link.icon : <RiDashboardFill />}
                </span>
                <span
                  key={i + 1}
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  } duration-300`}
                >
                  {link.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className="p-4">{loginLink}</div>
      </div>
    </>
  );
};

export default Navbar;
