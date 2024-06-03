import React from 'react'

const DashboardTable = () => {
  return (
    <>
      <div className='container mx-auto p-4'>
        <h2 className='text-2xl font-bold mb-4'>order dashboard</h2>
        <div>
        <p>Whatsapp: </p>
        <p>Call: </p>
        <p>Email: </p>
        </div>
        <table className='min-w-full bg-white rounded-lg shadow-lg overflow-hidden'>
          <thead>
            <tr className='py-2 px-4 border-b'>
              <th>name</th>
              <th>sunber</th>
              <th>email</th>
              <th>telephone</th>
              <th>jumlah</th>
              <th>notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='py-2 px-4 border-b'>
              <td>order name</td>
              <td>order sumber</td>
              <td>order email</td>
              <td>order telephone</td>
              <td>order jumlah</td>
              <td>order notes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DashboardTable