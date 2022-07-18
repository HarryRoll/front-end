import React,{useState, useEffect} from "react";
import countriesApi from '../api/countriesApi';
import CountryAdd from "./CountryAdd";

export default function CountryView() {
    const [country, setCountry] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [values, setValues] = useState({
        country_id: '',
        country_name: '',
        region_id: '',
    })

    useEffect(() => {
        countriesApi.list().then(data => {
            setCountry(data)
        })
        setRefresh(false)
    }, [refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = async () => {
        const payload = {
            country_id: (values.country_id),
            country_name: (values.country_name),
            region_id: (values.region_id),
        }

        await countriesApi.create(payload)
            .then(() => {
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })

    }
    const onDelete = async (id) => {
        countriesApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    return(
    <div>
    <div>
            <h2 className='text-2xl px-0 py-3'>List Country</h2>
            <button className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-1" onClick={() => setDisplay(true)}> Add Country </button>
            {
            display ?
            <CountryAdd
                onSubmit={onSubmit}
                handleOnChange={handleOnChange}
                setDisplay={setDisplay}
            />
            :    
                    <>
                        <table className="w-full text-sm text-left table-auto ">
                            <thead>
                            <tr  className=' bg-orange-500 text-gray-500 dark:text-gray-100'>
                            <th scope="col" className="px-6 py-3 ">Country ID</th>
                            <th scope="col" className="px-6 py-3 ">Country Name</th>
                            <th scope="col" className="px-6 py-3 ">Region ID</th>
                            <th scope="col" className="px-6 py-3 ">Action</th>
                            </tr>
                            </thead>                   
                            <tbody>
                                {
                                    country&&country.map( con => (
                                        <tr className=' bg-orange-100 hover:bg-orange-200 dark:text-gray-500' key={con.country_id}>
                                            <td className="px-6 py-2">{con.country_id}</td>
                                            <td className="px-6 py-2">{con.country_name}</td>
                                            <td className="px-6 py-2">{con.region_id}</td>
                                            <button className="px-2 py-1 text-red-500 border-red-600 hover:bg-red-500 hover:text-gray-100 rounded-lg" onClick={() => onDelete(con.country_id)}> Delete Country </button>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </>
            }
        </div>
</div>
)
}