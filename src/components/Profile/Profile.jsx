import { Navbar } from '../exports'
import "./profile.css"
import { useState } from "react";


const UserProfile = () => {
  // بيانات المستخدم الافتراضية
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Team Member",
  });

  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  // تغيير بيانات المستخدم
  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // حفظ التعديلات
  const handleSave = () => {
    setUser(updatedUser);
    setEditMode(false);
  };

  return (
    <>
    <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <img
            src="src/components/Profile/user.jpeg"
            alt=""
            className="profile-avatar"
          />
          <h2>{editMode ? "Edit Profile" : "User Profile"}</h2>
        </div>

        <div className="profile-info">
          <label>Name:</label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleChange}
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div className="profile-info">
          <label>Email:</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleChange}
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>

        <div className="profile-info">
          <label>Role:</label>
          {editMode ? (
            <input
              type="text"
              name="role"
              value={updatedUser.role}
              onChange={handleChange}
            />
          ) : (
            <p>{user.role}</p>
          )}
        </div>

        <div className="profile-actions">
          {editMode ? (
            <>
              <button onClick={handleSave} className="save-btn">
                Save
              </button>
              <button onClick={() => setEditMode(false)} className="cancel-btn">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={() => setEditMode(true)} className="edit-btn">
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
