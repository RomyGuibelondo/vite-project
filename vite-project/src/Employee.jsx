import React from 'react'
import { Link } from 'react-router-dom'

function Employee() {
  return (
    <div className='px-5 py-3'>
        <div className='grid justify-center'>
            <h3>Employee List</h3>
        </div>
        <Link to="/create" className='bg-green-700 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-md'>Add Employee</Link>
    </div>
  )
}

export default Employee