import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const EquipDetails = ({equipName,makeOfEquip,model,quantity}) => {

  return (
    <>

      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {equipName}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                {makeOfEquip}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {model}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {quantity}
              </td>
              <td
                className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                available
              </td>
              
            </tr>
            
            
          </tbody>
    </>
  );
};

export default EquipDetails;
