import Table from "./Table";

const Inventory = () => {


  return (
    <>
      {/* search bar */}
      <div className="col-span-2 place-items-center max-h-fit w-full mt-20">
        <div className="px-9">
            <Table />
        </div>
      </div>
    </>
  );
};

export default Inventory;
