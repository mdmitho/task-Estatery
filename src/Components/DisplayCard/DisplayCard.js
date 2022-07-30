import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart ,faBedPulse,faToilet,faMaximize} from '@fortawesome/free-solid-svg-icons'

 

const DisplayCard = (props) => {
    const { name, price, img, location, beds, bathrooms, sizes } = props.house;
    const [cls, setCls] = useState("green");

    return (
      <div className="">
        <div class="card  bg-base-100 shadow-xl">
          <div className="mb-[-20px]">
            <figure>
              <img className="h-[230px] w-full" src={img} alt="Shoes" />
            </figure>
          </div>

          <div class="badge rounded border-0 bg-primary text-white p-4 ">POPULAR</div>

          <div class="card-body">
            <div className="flex justify-between">
              <div className="">
                <h2 class="">
                  <span className="text-2xl font-bold text-primary ">${price}</span>
                  <small className="mt-2">/month</small>
                </h2>
              </div>
              <div className=" text-2xl cursor-pointer ">
                <>
                  <style>{`
                    .red {color: red}
                     .green {color: #7067EF}
                      `}</style>
                  <span
                    className={cls}
                    onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                </>
              </div>
            </div>
            <h1 className="card-title font-bold">{name}</h1>
            <p className="text-left">{location}</p>
            <div class="divider"></div>
            <div class="card-actions justify-between">
              <div className="">
                <FontAwesomeIcon
                  className="text-primary text-xl mr-2"
                  icon={faBedPulse}
                ></FontAwesomeIcon>
                <span className="">{beds}</span>
              </div>
              <div class="">
                <FontAwesomeIcon
                  className="text-primary text-xl mr-2"
                  icon={faToilet}
                ></FontAwesomeIcon>
                <span className="">{bathrooms}</span>
              </div>
              <div class="">
                <FontAwesomeIcon
                  className="text-primary text-xl mr-2"
                  icon={faMaximize}
                ></FontAwesomeIcon>
                <span className="">{sizes}</span>m<sup>2</sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DisplayCard;