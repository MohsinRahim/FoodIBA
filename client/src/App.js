// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';

// import LoginPage from './Pages/LoginPage';  // Adjust the path if needed
// import ProfilePage from './Pages/ProfilePage';  // Adjust the path if needed
// // import FriendsPage from './Pages/FriendsPage';
// // import ChallengePage from './Pages/ChallengePage';  // Adjust the path if needed
// // import CreateChallengePage from './Pages/CreateChallengePage';
// // import ListChallengesPage from './Pages/ListChallengesPage';
// import UserContext from './UserContext';  // import UserContext


// import PrivateRoute from './Routes/PrivateRoute'; // Adjust the path if needed
// import PublicRoute from './Routes/PublicRoute'; // Adjust the path if needed

// function App() {
//   const token = localStorage.getItem('token');
//   const [user, setUser] = useState(token ? { token } : null);
//   console.log("User state in App:", user);
// // dummy change
//   return (
//     <UserContext.Provider value={{ user, setUser }}>  {/* Provide the context */}
//       <Router>
//       <Routes>
//       <Route 
//             path="/profile/:userId" 
//             element={
//               <PrivateRoute>
//                 <ProfilePage />
//               </PrivateRoute>
//             } 
//           />
//           <Route 
//             path="/profile" 
//             element={
//               <PrivateRoute>
//                 <ProfilePage />
//               </PrivateRoute>
//             } 
//           />
//   {/* <Route 
//     path="/friends" 
//     element={
//       <PrivateRoute>
//         <FriendsPage />
//       </PrivateRoute>
//     } 
//   /> */}
//   {/* <Route 
//     path="/createchallenge" 
//     element={
//       <PrivateRoute>
//         <CreateChallengePage />
//       </PrivateRoute>
//     } 
//   />
//   <Route 
//     path="/challenge" 
//     element={
//       <PrivateRoute>
//         <ListChallengesPage />
//       </PrivateRoute>
//     } 
//   />
//   <Route 
//   path="/challenge/:challengeId" 
//   element={
//     <PrivateRoute>
//       <ChallengePage />
//     </PrivateRoute>
//   } 
// /> */}
//   <Route 
//     path="/login" 
//     element={
//       <PublicRoute redirectTo="/profile">
//         <LoginPage />
//       </PublicRoute>
//     } 
//   />
  
//   <Route path="*" element={<Navigate to="/login" />} />
// </Routes>
//       </Router>
//     </UserContext.Provider>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import Home from './Pages/Home'; // Import the Home page
import Menu from './Pages/Menu'; // Import the Menu page
import Cart from './Pages/Cart'; // Import the Cart page
import Checkout from './Pages/Checkout'; // Import the Checkout page
import UserContext from './UserContext';
import PublicRoute from './Routes/PublicRoute';
import RestMenu from './Pages/Rest_Menu';

function App() {
  const token = localStorage.getItem('token');
  const [user, setUser] = useState(token ? { token } : null);
  console.log("User state in App:", user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <PublicRoute redirectTo="/profile">
                <Home />
              </PublicRoute>
            } 
          />
          <Route 
            path="/restmenu"
            element={
              <PublicRoute redirectTo="/profile">
                <RestMenu />
              </PublicRoute>
            } 
          />
          <Route 
            path="/menu"
            element={
              <PublicRoute redirectTo="/profile">
                <Menu />
              </PublicRoute>
            } 
          />
          <Route 
            path="/cart"
            element={
              <PublicRoute redirectTo="/profile">
                <Cart />
              </PublicRoute>
            } 
          />
          <Route 
            path="/checkout"
            element={
              <PublicRoute redirectTo="/profile">
                <Checkout />
              </PublicRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <PublicRoute redirectTo="/">
                <ProfilePage />
              </PublicRoute>
            } 
          />
          <Route 
            path="/login" 
            element={
              <PublicRoute redirectTo="/profile">
                <LoginPage />
              </PublicRoute>
            } 
          />
          <Route 
            path="*" 
            element={user ? <Navigate to="/" /> : <Navigate to="/login" />} 
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
