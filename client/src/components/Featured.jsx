import React from 'react'

const Featured = ({labName, labNo, department, labIncharge}) => {

  // const handleClick = (e) => {
  //   navigate(`/equipDetail/${_id}`);
  // }

  return ( 
    <>
    <div className='grid grid-cols-3'>
        <div class="bg-[#DDEFF9] max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img class="w-full h-60" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="Sunset in the mountains" />
            <div className="flex flex-col justify-center items-start p-6 ">
                <h5 className="mb-2 text-md font-medium">
                  Lab Name : {labName}
                </h5>
                <h5 className="mb-2 text-md font-medium">
                  Department : {department}
                </h5>
                <h5 className="mb-2 text-md font-medium">
                  Lab No. : {labNo}
                </h5>
                <h5 className="mb-2 text-md font-medium">
                  Lab Incharge : {labIncharge}
                </h5>
            </div>   
            {/* <button className="m-4 bg-blue-700 hover:bg-blue-900 px-4 py-2 text-white rounded text-xs tracking-wider"  
               onClick={handleClick}
            >
              Book Slots
            </button>          */}
        </div>
    </div>
    </>
  )
}

export default Featured
