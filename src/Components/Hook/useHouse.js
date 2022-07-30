import { useEffect } from "react";
import { useState } from "react";


const useHouse = () => {
    const [houses,setHouses]=useState([])
    useEffect(() => {
      fetch("House.json")
        .then((res) => res.json())
        .then((data) => setHouses(data));
    }, []);
    return [houses, setHouses];
};

export default useHouse;