import { BsSearch } from "react-icons/bs";





const Details = () => {
    
  return (
    <>
      <div className="place-items-center max-h-fit w-full">
        <div className="inline-flex px-9 mt-5">
          <BsSearch className="text-lg block float-left cursor-pointer mr-5" />
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="text-base bg-transparent w-full border-none focus:outline-none"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Details;
