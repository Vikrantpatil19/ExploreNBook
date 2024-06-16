import React, { useState, useEffect } from "react";
import "./PreLoader.css";
import Image1 from "./travel.gif";

export default function Preloader() {
  // State to keep track if loading is true or false
  const [isLoading, setIsLoading] = useState(true);

  // Effect to run a function when the component loads
  useEffect(() => {
    // Set a timer for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // After 3 seconds, set loading to false
    }, 3000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Render loading screen if isLoading is true

  return (
    <>
      {isLoading && (
        <div className="preloader ">
          {/* <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> */}
          <img src={Image1} alt="img" height="70px" className="" />
          <h1 className="g-font-b text-black ms-2 text-opacity-75 fs-3 mt-3">
            {" "}
            Loading Your Ride...
          </h1>
        </div>
      )}
    </>
  );
}
