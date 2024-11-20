import React, { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';

const ManageuserData = () => {
  const [userList, setuserList] = useState([]);

  const fetchuserdata = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/getall`);
    const data = await res.json();
    setuserList(data);
  };

  useEffect(() => {
    fetchuserdata();
  }, []);

  const deleteuserData = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/delete/`+ id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
    fetchuserdata();

    if (res.status === 200) {
      enqueueSnackbar('Deleted Successfully', { variant: 'success' });
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }
  };

  const displayuserData = () => {
    return (
      <table className='table table-primary'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button className='bg-purple-400 p-2 w-24 text-white font-semibold' onClick={() => deleteuserData(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className='container-fluid'>
      <h1 className='text-center text-3xl font-semibold underline'>Manage User Data</h1>

      <div className=" mx-auto py-3">
      {displayuserData()}

      </div>
    </div>
  );
};

export default ManageuserData;