import React from "react";

function CreateOrder() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  return (
    <div className="mt-20 px-8 w-[100%]">
      <p className="text-2xl font-medium mb-10">Ready to order ? Let's go!</p>
      <form onSubmit={handleSubmit}>
        <div className=" flex gap-20 mb-8">
          <label className=" w-52 inline-block text-lg font-medium">
            First Name
          </label>
          <input
            type="text"
            className="w-[40%] border-2 rounded-full p-2 back outline-none"
          />
        </div>
        <div className="flex gap-20 mb-8">
          <label className=" w-52 inline-block text-lg font-medium">
            Phone Number
          </label>
          <input
            type="text"
            className="w-[40%] border-2 rounded-full p-2 back outline-none"
          />
        </div>
        <div className="flex gap-20">
          <label className=" w-52 inline-block text-lg font-medium">
            Address
          </label>
          <input
            type="text"
            className="w-[40%] border-2 rounded-full p-2 back outline-none"
          />
        </div>
        <input type="checkbox" name="" id="" />{" "}
        <label htmlFor="" className="font-semibold text-lg">
          Want to give your order priority
        </label>
        <button className="block px-4 py-2 border-none rounded-lg bg-orange-400 mt-4 text-white font-semibold">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CreateOrder;
