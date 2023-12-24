import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginSignup from '../Components/LoginSignup_Material/LoginSignup';
import { login, signup } from '../Services/userServicetest';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignup = async (userData) => {
    try {
      await signup(userData);
      // Redirect or show success message
    } catch (error) {
      console.error('Signup Error:', error.response.data.message);
      // Handle signup error
    }
  };

  const handleLogin = async (credentials) => {
    try {
      const { token } = await login(credentials);
      localStorage.setItem('token', token);
      navigate('/profile'); // Redirect to profile or another page
    } catch (error) {
      console.error('Login Error:', error.response.data.message);
      // Handle login error
    }
  };

  return (
    <div>
      <LoginSignup onSignup={handleSignup} onLogin={handleLogin} />
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
