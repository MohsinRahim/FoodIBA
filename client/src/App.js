import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import UserContext from './UserContext';

import History from './Pages/History/History';

import PublicRoute from './Routes/PublicRoute';
import RestMenu from './Pages/RestMenu/Rest_Menu';
import Orders from './Pages/Orders/Orders';
import RestaurantCard from './Components/RestaurantCard/RestaurantCard';
import MenuItem from './Components/Menu/MenuItem';

function App() {
  const token = localStorage.getItem('token');
  const [user, setUser] = useState(token ? { token } : null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute redirectTo="/home"><Home /></PublicRoute>} />
          <Route path="/menu/:restaurantId" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restmenu" element={<RestMenu />} />
          <Route path="/history" element={<History />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={user ? <Navigate to="/" /> : <Navigate to="/login" />} />
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
                <RestMenu />
            } 
          />

          <Route 
            path="/order"
            element={
                <Orders />
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
            path="/history"
            element={
                <History />
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


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import LoginPage from './Pages/LoginPage';
// import ProfilePage from './Pages/ProfilePage';
// import Home from './Pages/Home'; // Import the Home page
// import Menu from './Pages/Menu'; // Import the Menu page
// import Cart from './Pages/Cart'; // Import the Cart page
// import Checkout from './Pages/Checkout'; // Import the Checkout page
// import UserContext from './UserContext';

// import PublicRoute from './Routes/PublicRoute';

// function App() {
//   const token = localStorage.getItem('token');
//   const [user, setUser] = useState(token ? { token } : null);
//   console.log("User state in App:", user);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       <Router>
//         <Routes>
//           <Route 
//             path="/" 
//             element={
//               <PublicRoute redirectTo="/profile">
//                 <Home />
//               </PublicRoute>
//             } 
//           />
//           <Route 
//             path="/menu"
//             element={
//               <PublicRoute redirectTo="/profile">
//                 <Menu />
//               </PublicRoute>
//             } 
//           />
//           <Route 
//             path="/cart"
//             element={
//               <PublicRoute redirectTo="/profile">
//                 <Cart />
//               </PublicRoute>
//             } 
//           />
//           <Route 
//             path="/checkout"
//             element={
//               <PublicRoute redirectTo="/profile">
//                 <Checkout />
//               </PublicRoute>
//             } 
//           />
//           <Route 
//             path="/profile" 
//             element={
//               <PublicRoute redirectTo="/">
//                 <ProfilePage />
//               </PublicRoute>
//             } 
//           />
//           <Route 
//             path="/login" 
//             element={
//               <PublicRoute redirectTo="/profile">
//                 <LoginPage />
//               </PublicRoute>
//             } 
//           />
//           <Route 
//             path="*" 
//             element={user ? <Navigate to="/" /> : <Navigate to="/login" />} 
//           />
//         </Routes>
//       </Router>
//     </UserContext.Provider>
//   );
// }

// export default App;
