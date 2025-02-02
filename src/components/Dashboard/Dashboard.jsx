import { useState, useEffect } from 'react';
import { Navbar } from '../exports'
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";


import './style.css'

function Dashboard() {
  const db = getDatabase();
  const auth = getAuth();

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);


  useEffect(() => {
    const db = getDatabase();
    const usersRef = ref(db, "users");

    onValue(usersRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const usersArray = [];

        Object.keys(data).forEach((uid) => {
          const userEntries = data[uid];
          Object.keys(userEntries).forEach((userKey) => {
            usersArray.push({ id: userKey, ...userEntries[userKey] });
          });
        });

        setUsers(usersArray);
      } else {
        setUsers([]);
      }
    });
  }, []);

  const handleChange = (event) => {
    const userId = event.target.value;
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user || null);
    console.log(selectedUser.id)
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-2">
        <h2 className="text-xl font-semibold mb-3">Select a User</h2>

        <select
          onChange={handleChange}
          defaultValue=""
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>

      {selectedUser && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md shadow">
          <p><strong className="text-gray-700">Email:</strong> {selectedUser.email}</p>
          <p><strong className="text-gray-700">User Type:</strong> {selectedUser.userType}</p>
        </div>
      )}
    </>
  );
}

export default Dashboard;
