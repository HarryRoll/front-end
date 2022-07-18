import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetRegionRequest,DelRegionRequest } from '../Redux-saga/Action/RegionAction'

export default function Region() {
    const dispatch = useDispatch()
    const {regions} = useSelector(state => state.regionStated)
    
    useEffect(() => {
        dispatch(GetRegionRequest())
    }, [])

    const onDelete = async (id) =>{
        dispatch(DelRegionRequest(id))
    }

    return (
        <div>
            <h2 className='text-2xl px-0 py-3'>List of Regions</h2>
            <table className="w-full text-sm text-left table-auto ">
                <thead>
                    <tr className=' bg-orange-500 text-gray-500 dark:text-gray-100'>
                    <th scope="col" className="px-6 py-3 ">Region ID</th>
                    <th scope="col" className="px-6 py-3">Region Name</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        regions && regions.map(regi => {
                            return (
                                <tr className=' bg-orange-100 hover:bg-orange-200 dark:text-gray-500'>
                                    <td className="px-6 py-2">{regi.region_id}</td>
                                    <td className="px-6 py-2">{regi.region_name}</td>
                                    <button className="px-2 py-1 border-red-600 hover:bg-red-500 hover:text-gray-100 rounded-lg" onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(regi.region_id)
                                        }
                                    }}>Delete</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}