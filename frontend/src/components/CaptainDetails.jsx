import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
          <div className="flex justify-between items-center mb-3">
          <div className="flex items-center justify-start gap-3">
            <img
              className="h-14 w-14 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVyiI1XClbT2Ue-7CGVAp8sKoqe_068R9zw&s" alt="driver"/>
            <h4 className=" text-lg font-semibold">Jack Watson</h4>
          </div>
          <div className="">
            <h4 className="text-xl font-semibold">500.Rs</h4>
            <p className="text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex p-3 bg-gray-100 rounded-xl justify-evenly">
          <div className="text-center">
            <i className="ri-time-line font-thin text-3xl mb-2"></i>
            <h5 className="text-lg font-medium">10.3</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="ri-speed-up-line font-thin text-3xl mb-2"></i>
            <h5 className="text-lg font-medium">10.3</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="ri-booklet-line font-thin text-3xl mb-2"></i>
            <h5 className="text-lg font-medium">10.3</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails