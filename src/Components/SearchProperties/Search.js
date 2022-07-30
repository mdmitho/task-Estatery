import React from 'react';
import useHouse from '../Hook/useHouse';

const Search = () => {
    const [houses,setHouses]=useHouse([])
    console.log(houses);
    return (
      <div className="">
        <div className="container mx-auto flex justify-between my-8">
          <div className="">
            <h1 className="text-3xl font-bold">Search properties to rent</h1>
          </div>
          <div className="">
            <select className="p-3 pr-5 rounded text-xl font-bold" name="" id="">
              <option value="">Search With Search Bar</option>
              <option value="">Houses</option>
              <option value="">Houses.......</option>
            </select>
          </div>
        </div>
        <div className="mx-auto mt-5">
          <div class="stats rounded-none stats-vertical lg:stats-horizontal shadow c">
            <div class=" p-5">
              <p className="text-left ">Location</p>
              <p className="text-xl font-bold mt-3 ">New York,US</p>
            </div>

            <div class=" p-5">
              <p className="text-left ">When</p>

              <div className="flex ">
                <div className="mr-2 mt-3">
                  <p className="text-xl font-bold ">Select Move-in Date</p>
                </div>
                <div className="w-5 m-4">
                  <a href="#">
                    {" "}
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVTGijrudBR2Xo32feDau0SUP4SeAdqRcRw&usqp=CAU"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class=" p-5">
              <p className="text-left">Price</p>
              <select
                name="slot"
                className=" text-xl p-3   font-bold select-bordered w-full max-w-xs"
              >
                {houses.map((house, index) => (
                  <option key={index} value={house}>
                    <>$</>
                    {house.price}
                  </option>
                ))}
              </select>
            </div>

            <div class="stat">
              <div className="">
                <p className="text-left">Property Type</p>
                <select className=" rounded text-left  font-bold text-xl mt-3" name="" id="">
                  <option value="">House</option>
                  <option value="">Houses 1</option>
                  <option value="">Houses.......</option>
                </select>
              </div>
            </div>

            <div class="m-5 p-5 ">
              <button class="btn btn-primary text-white w-28">Search</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Search;
