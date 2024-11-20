import React, { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';

const ManageContact = () => {
  const [userList, setuserList] = useState([]);

  const fetchContactData = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/contact/getall`);
    const data = await res.json();
    setuserList(data);
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  const deleteContactData = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/contact/delete/`+ id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
    fetchContactData();

    if (res.status === 200) {
      enqueueSnackbar('Deleted Successfully', { variant: 'success' });
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }
  };

  const displayContactData = () => {
    return (
      <table className='table table-primary'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.subject}</td>
                <td>{contact.message}</td>
              <td>
                <button className='bg-purple-400 p-2 w-24 text-white font-semibold' onClick={() => deleteContactData(contact._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className='container-fluid'>
      <h1 className='text-center text-3xl font-semibold underline'>Manage Contact</h1>

      <div className=" mx-auto py-3">
      {displayContactData()}

      </div>
    </div>
  );
};

export default ManageContact;