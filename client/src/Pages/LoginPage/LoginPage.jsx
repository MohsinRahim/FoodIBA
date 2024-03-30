import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginSignup from '../../Components/LoginSignup_Material/LoginSignup';
import { login, signup } from '../../Services/userServicetest';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (userData) => {
    try {
      setLoading(true);
      await signup(userData);
      window.alert('Signup successful. Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Signup Error:', error.response ? error.response.data.message : error.message);
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (credentials) => {
    try {
      setLoading(true);
      const { token } = await login(credentials);
      localStorage.setItem('token', token);
      navigate('/profile');
    } catch (error) {
      console.error('Login Error:', error.response ? error.response.data.message : error.message);
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container"> {/* Apply the container class */}
      <LoginSignup
        onSignup={handleSignup}
        onLogin={handleLogin}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default LoginPage;





// import React from 'react';
// import LoginSignup from '../Components/LoginSignup_Material/LoginSignup'; // Adjust the path if needed

// const LoginPage = () => {
//   return (
//     <div>
//       <LoginSignup />
//     </div>
//   );
// };

// export default LoginPage;






// import React, { useState } from 'react';
// import LoginSignup from '../Components/LoginSignup_Material/LoginSignup';
// import { createUser } from '../Services/userService';

// const LoginPage = () => {
//   const [userData, setUserData] = useState({
//     email: '',
//     password: '',
//     // other necessary fields
//   });

//   const handleRegister = async () => {
//     try {
//       const response = await createUser(userData);
//       console.log(response.message);
//       // Handle success (e.g., redirect to profile page or show success message)
//     } catch (error) {
//       console.error(error);
//       // Handle error (e.g., show error message)
//     }
//   };

//   // Add onChange handlers and pass handleRegister to the LoginSignup component as needed

//   return (
//     <div>
//       <LoginSignup onRegister={handleRegister} />
//     </div>
//   );
// };

// export default LoginPage;
