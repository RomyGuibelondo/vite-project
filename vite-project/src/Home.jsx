import React from 'react'

function Home() {
  return (
    <div>
        <div className='p-8 grid grid-cols-3 gap-7 justify-around'>
            <div className='p-3 border shadow-sm grid'>
                <p className='justify-self-center'>Admin</p>
                <hr />
                <p>Total: {}</p>
            </div>
            <div className='p-3 border shadow-sm grid'>
                <p className='justify-self-center'>Employee</p>
                <hr />
                <p>Total: {}</p>
            </div>
            <div className='p-3 border shadow-sm grid'>
                <p className='justify-self-center'>Salary</p>
                <hr />
                <p>Total: {}</p>
            </div>

        {/* list of admin */}
        </div>
        <div className='mt-3 px-5 pt-3'>
            <p className='font-bold'>List of Admins</p>
            <table className='table-fixed border'>
                <thead>
                    <th>
                        <th>Email</th>
                        <th>Action</th>
                    </th>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home