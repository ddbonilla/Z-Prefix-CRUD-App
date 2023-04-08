import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { inventoryContext } from "../App";
import "./common.css";

//icons
import { FaBowlingBall } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineInventory } from "react-icons/md";
import { AiOutlineFileAdd, AiOutlineUser } from "react-icons/ai";
import { GiBowlingPin } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const { url, user, setUser } = useContext(inventoryContext);

  let inventoryLink = (
    <Link
      to="inventory"
      className={
        "text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white"
      }
    >
      <MdOutlineInventory className="text-xl block float-left" />
      <span
        className={`text-base font-medium flex-1 ${
          !open && "hidden"
        } duration-300`}
      >
        Inventory
      </span>
    </Link>
  );

  const managerLinks = [
    { name: "Dashboard", to: "/", icon: "", isVisible: isVisible },
    {
      name: "New Item",
      to: "/",
      icon: <AiOutlineFileAdd />,
      isVisible: isVisible,
    },
  ];

  let loginLink = (
    <Link
      to="Login"
      className={
        "text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white"
      }
    >
      <AiOutlineUser className="text-xl block float-left" />
      <span
        className={`text-base font-medium flex-1 ${
          !open && "hidden"
        } duration-300`}
      >
        Login
      </span>
    </Link>
  );

  if (user.Username) {
    loginLink = (
      <Link
        to="Login"
        onClick={() => {
          fetch(`${url}/logout`, {
            method: "POST",
            credentials: "include",
          }).then(() => {
            setUser({});
            setIsVisible(isVisible);
          });

        }}
        className={
          "text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white"
        }
      >
        <AiOutlineUser className="text-xl block float-left" />
        <span
          className={`text-base font-medium flex-1 ${
            !open && "hidden"
          } duration-300`}
        >
          Logout
        </span>
      </Link>
    );
  }

  return (
    <>
      <div
        className={`relative bg-emerald-800 h-screen 
        ${open ? "w-70" : "w-20"} duration-300`}
      >
        <FaBowlingBall
          className={`brand absolute -right-4 top-7 rounded-full bg-emerald-900 text-white text-3xl
            cursor-pointer ${!open && "rotate-[360deg]"} duration-300`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex py-6 px-5">
          <GiBowlingPin
            className="relative text-white bg-emerald-500 text-3xl rounded-full cursor-pointer block float-left mr-1"
          />
          <h1
            className={` text-white text-2xl font-medium 
                ${!open && "scale-0"} duration-300`}
          >
            B.O.W.L.
          </h1>
        </div>
        <hr className="mx-4 border-1" />
        <div className="p-4">
          <div>{loginLink}</div>
          <div>{inventoryLink}</div>
          <div>
            {managerLinks.map((link, i) => (
              <div key={Math.random()}>
                <Link
                  key={i}
                  to={link.name}
                  className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2
                          hover:bg-light-white ${
                            !user.Username && isVisible && "hidden"
                          } `}
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
