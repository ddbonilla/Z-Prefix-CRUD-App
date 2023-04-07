import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { inventoryContext } from "../App";

//icons
import { FaBowlingBall } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineInventory } from "react-icons/md";
import { AiOutlineFileAdd, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const { user, setUser } = useContext(inventoryContext);

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
  )

  const managerLinks = [
    { name: "Dashboard", to: "/", icon: "" , isVisible: isVisible },
    { name: "New Item", to: "/", icon: <AiOutlineFileAdd /> , isVisible: isVisible },
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
          setUser({})
          setIsVisible(isVisible)
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
          <div>{loginLink}</div>
          <div>{inventoryLink}</div>
          <div>
            {managerLinks.map((link, i) => (
              <div key={Math.random()}>
                <Link
                  key={i}
                  to={link.name}
                  className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2
                          hover:bg-light-white ${!user.Username && isVisible && "hidden"} `}
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
