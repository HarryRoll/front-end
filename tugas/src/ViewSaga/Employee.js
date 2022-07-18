import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetEmployeeRequest,DelEmployeeRequest } from '../Redux-saga/Action/EmployeeAction'
import EmployeeAdd from './EmployeeAdd'
import EmpionEdit from './EmployeeEdit'

export default function EmployeeView() {
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()
    const {employees} = useSelector(state => state.employeeStated)
    
    useEffect(() => {
        dispatch(GetEmployeeRequest())
    }, [])

    const onDelete = async (id) =>{
        dispatch(DelEmployeeRequest(id))
    }
    const onClick = (empID) => {
        setDisplayEdit(true)
        setId(empID)
    }
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {
                    displayEdit
                        ?
                        <EmpionEdit
                            closeAdd={() => setDisplayEdit(false)}
                            onRefresh={() => setRefresh(true)}
                            id={id}
                            setDisplay={setDisplayEdit}
                        />
                        :
                        display ?
                            <EmployeeAdd
                                setDisplay={setDisplay}
                                closeAdd={() => setDisplay(false)}
                                onRefresh={() => setRefresh(true)}
                            />
                            :
                            <>
                                <button type="button" className=" mb-1 cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Employee </button>
                                <table className="w-full text-sm text-left text-gray-100 dark:text-gray-100 table-auto ">
                                    <thead className="text-xs text-gray-100 uppercase bg-orange-600  dark:text-gray-100">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Employee ID</th>
                                            <th scope="col" className="px-6 py-3">First Name</th>
                                            <th scope="col" className="px-6 py-3">Last Name</th>
                                            <th scope="col" className="px-6 py-3">Email</th>
                                            <th scope="col" className="px-6 py-3">Phone Number</th>
                                            <th scope="col" className="px-6 py-3">Hire Date</th>
                                            <th scope="col" className="px-6 py-3">Employee Profile</th>
                                            <th scope="col" className="px-6 py-3">Setting</th>
                                        </tr>
                                    </thead>
                                    <tbody className="overscroll-auto md:overscroll-contain">
                                        {
                                            employees && employees.map(emp => {
                                                return (
                                                    <tr key={emp.employee_id} className="bg-orange-100 hover:bg-orange-200 dark:text-gray-500">
                                                        <td scope="row" className="px-6 py-2 font-medium text-gray-500 dark:text-gray-900 whitespace-nowrap">{emp.employee_id}</td>
                                                        <td className="px-6 py-2">{emp.first_name}</td>
                                                        <td className="px-6 py-2">{emp.last_name}</td>
                                                        <td className="px-6 py-2">{emp.email}</td>
                                                        <td className="px-6 py-2">{emp.phone_number}</td>
                                                        <td className="px-6 py-2">{emp.hire_date}</td>
                                                        <td className="px-6 py-2"><img src={emp.emp_profile}></img></td>
                                                        <td className="px-6 py-2">
                                                            <td className='py-2'>
                                                                <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(emp.employee_id)}>Delete</button>
                                                            </td>
                                                            <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick(emp.employee_id)}>Edit</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                }
            </div>
        </div>
    )
}
