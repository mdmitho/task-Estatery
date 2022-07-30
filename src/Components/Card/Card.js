import React from 'react';
import DisplayCard from '../DisplayCard/DisplayCard';
import useHouse from '../Hook/useHouse';

const Card = () => {
    const [houses, setHouses] = useHouse([]);
    return (
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
          {houses.map((house) => (
            <DisplayCard house={house} key={house.id}></DisplayCard>
          ))}
        </div>
      </div>
    );
};

export default Card;