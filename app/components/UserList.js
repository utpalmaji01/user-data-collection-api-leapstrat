"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  // State to store user data
  const [users, setUsers] = useState([]);
  
  // State to store filter values
  const [filter, setFilter] = useState({ gender: '', city: '', country: '' });
  
  // State for pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // Fetch users whenever filters, page, or limit change
  useEffect(() => {
    fetchUsers();
  }, [filter, page, limit]);

  // Function to fetch users from the API and Update users state with the response data
  const fetchUsers = async () => {
    const params = {
      limit,
      gender: filter.gender,
      city: filter.city,
      country: filter.country,
      page,
    };
    
    const response = await axios.get('/api/users', { params });
    setUsers(response.data.users);
  };

  // Function to handle filter changes
  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <div className="grid grid-cols-3 gap-4">
        
        {/* Gender filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender: </label>
          <select name="gender" onChange={handleFilterChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black text-lg">
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* City filter
        <div>
          <label className="block text-sm font-medium text-gray-700">City: </label>
          <input type="text" name="city" onChange={handleFilterChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black text-lg"/>
        </div> */}

        {/* Country filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Country: </label>
          <input type="text" name="country" onChange={handleFilterChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black text-lg"/>
        </div>
      </div>

      {/* User list display */}
      <div className="mt-4">
        {users.map((user, index) => (
          <div key={index} className="p-4 bg-gray-100 m-2 rounded-md shadow-md">
            <p className="text-black">Name: {`${user.name.first} ${user.name.last}`}</p>
            <p className="text-black">Email: {user.email}</p>
            <p className="text-black">Gender: {user.gender}</p>
            <p className="text-black">City: {user.location.city}</p>
            <p className="text-black">Country: {user.location.country}</p>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between mt-4">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Previous</button>
        <button onClick={() => handlePageChange(page + 1)} className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Next</button>
      </div>
    </div>
  );
};

export default UserList;
