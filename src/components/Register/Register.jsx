import React, { useState } from 'react';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { firebaseConfig, auth } from './firebaseConfig'; // ✅ استيراد firebaseConfig
import './Register.css';
import registerImage from './signUp.png';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'user',
    agreeTerms: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password does not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      const userData = {
        username: formData.username,
        email: formData.email,
        userType: formData.userType
      };

      // ✅ استخدام firebaseConfig.databaseURL بدلاً من app.options.databaseURL
      await axios.post(
        `${firebaseConfig.databaseURL}/users/${user.uid}.json`,
        userData
      );
      sessionStorage.setItem("user", JSON.stringify(userData));
      alert("Registration successful!");
      console.log("User registered:", user);

      navigate('/');  // Redirect to the homepage
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred while registering: " + error.message);
    }
  };

  // Google sign-up handler
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Optional: Store the user info in sessionStorage
      // localStorage.setItem("user", JSON.stringify(user));

      navigate('/');  // Redirect to the homepage after successful login
    } catch (error) {
      console.error("Error during Google sign-up:", error);
      alert("An error occurred while registering with Google: " + error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>User Type:</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="user">User</option>
              <option value="admin">Manager</option>
            </select>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              I agree to all terms
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>

        {/* Google Sign-up button */}
        <div className="google-signup-container">
          <span>Or sign up with</span>
          <div className="google-signup" onClick={handleGoogleSignUp}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
          </div>
        </div>

        <p>Already have an account? <a href="/login" style={{color: "blue", textDecoration: "underline"}}>Sign in</a></p>
      </div>
      <div className="image-container">
        <img src={registerImage} alt="signUp-img" />
      </div>
    </div>
  );
}

export default RegisterPage;
