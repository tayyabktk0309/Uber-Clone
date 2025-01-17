import React from "react";

const LocationSearchPanel = ({setPanelOpen, setVehiclePanel}) => {

  const locations = [
    "F10 Markaz Islambad, Pakistan",
    "G-11 Markaz Islamabad, Pakistan",
    "Blue Area Islamabad, Pakistan",
    "DHA Phase 2 Islamabad, Pakistan",
    "I-8 Markaz Islamabad, Pakistan",
    "Bahria Town Phase 4 Islamabad, Pakistan"
  ]
  function handleVehiclePanel(){
    setVehiclePanel(true);
    setPanelOpen(false);
  }
  return (
    <div>
      {
        locations.map((location, index) => {
          return (
            <div key={index}
             className="w-full flex justify-start items-center gap-4 border-2 h-20  active:border-black rounded-xl p-2 my-2"
             onClick={()=>handleVehiclePanel()}
             >
            <h2 className=" bg-gray-300 rounded-full w-10 h-10 flex justify-center items-center">
              <i className="ri-map-pin-2-fill text-xl"></i>
            </h2>
            <div>
              <h4 className="text-lg font-semibold">
                {location} <br />
              </h4>
            </div>
          </div>
          )
        })
      }
    </div>
  );
};


  
export default LocationSearchPanel;

