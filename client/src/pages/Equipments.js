import React, { useEffect, useState } from 'react'
import EquipDetails from '../components/EquipDetails'
import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom';

const Equipments = () => {

    const [data,setData] = useState([]);
    const navigate = useNavigate();    
    const { _id } = useParams();

    const getData = async () => {
        try{
          const {data} = await axios.get(`http://localhost:3001/api/labs/equip/${_id}`)
          setData(data)
          // console.log(data)
        }
        catch(e){
          console.log(e)
        }
    }

    useEffect(() => {
        getData();
    },[])

    const handleClick = (e) => {
      e.preventDefault();
      navigate(`/equipForm/${_id}`);
    }

  return (
    <div>
        <div className="text-center md:text-left">
  
            <button className=" bg-blue-700 hover:bg-blue-900 px-4 py-2 text-white rounded text-xs tracking-wider"  
              onClick={handleClick}
            >
              + Add Equipment
            </button>

        </div>

        <div className="container justify-center mx-auto flex flex-col">
  <div className="overflow-x-auto shadow-md sm:rounded-lg">
    <div className="inline-block min-w-full align-middle dark:bg-gray-800">
      <div className="p-4">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                // fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                // clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <div className="overflow-hidden">
        <table className="min-w-full table-fixed dark:divide-gray-700 divide-y divide-green-400 ">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th scope="col" className="p-4">
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                EQUIPMENT NAME
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                MAKE OF EQUIPMENT
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                MODEL/VERSION
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                NOS.
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                STATUS
              </th>
              
            </tr>
          </thead>
            {
                data.map((item) => {
                    return <EquipDetails key={item._id} {...item}/>
                })
            }

        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Equipments
