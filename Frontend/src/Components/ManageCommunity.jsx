import React, { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';

const ManageCommunity = () => {
  const [community, setcommunity] = useState([]);

  const fetchCommunityData = async () => {
    const res = await fetch('http://localhost:5000/community/getall');
    const data = await res.json();
    setcommunity(data);
  };

  useEffect(() => {
    fetchCommunityData();
  }, []);

  const deleteCommunity = async (id) => {
    const res = await fetch('http://localhost:5000/community/delete/'+ id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
    fetchCommunityData();

    if (res.status === 200) {
      enqueueSnackbar('Deleted Successfully', { variant: 'success' });
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }
  };

  const displayCommunity = () => {
    return (
      <table className='table table-primary'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {community.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.title}</td>
              <td>{contact.date}</td>
              <td>{contact.details}</td>
              <td>
                <button className='bg-purple-400 p-2 w-24 text-white font-semibold' onClick={() => deleteCommunity(contact._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className='container-fluid'>
      <h1 className='text-center text-3xl font-semibold underline'>Manage Community</h1>
      
      <div className=" mx-auto py-3">
      {displayCommunity()}

      </div>
    </div>
  );
};

export default ManageCommunity;