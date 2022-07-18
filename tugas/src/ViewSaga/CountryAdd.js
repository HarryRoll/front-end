import React from "react";

export default function CountryAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label class="block text-sm font-medium text-gray-700">Country ID : </label>
                <input 
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                type="text" 
                placeholder="Country id" 
                onChange = {props.handleOnChange('country_id')}/>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Country Name : </label>
                <input
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                type="text" 
                placeholder="Country Name" 
                onChange = {props.handleOnChange('country_name')}/>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700" >Region ID : </label>
                <input 
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                type="text" 
                placeholder="Region id" 
                onChange = {props.handleOnChange('region_id')}/>
            </div>
            <div>
                <button 
                className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2 mr-1"
                type='submit'> Simpan </button>
                
                <button 
                className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2 "
                onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>`
    </div>
  )
}
