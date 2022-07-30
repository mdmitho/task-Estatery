import { useEffect } from "react";
import { useState } from "react";


const useHouse = () => {
    const [houses,setHouses]=useState([])
    useEffect(() => {
      fetch("laptop.json")
        .then((res) => res.json())
        .then((data) => setHouses(data));
    }, []);
    return [houses, setHouses];
};

export default useHouse;