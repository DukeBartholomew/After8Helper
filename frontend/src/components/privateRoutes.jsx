// import React from 'react';
// import { Navigate, Route } from 'react-router-dom';

// // Utils

// const PrivateRoutes = ({ component: Component, ...rest }) => {  
//   var session_token=localStorage.getItem('token')

//   return (
//     <Route {...rest} render={props => (
//      session_token !== null ? (
//       < Component  {...props} />
//       ) : (
//             <Navigate to={{
//               pathname: '/',
//               state: { from: props.location }
//               }}
//             />
//           )
//       )} 
//     />
//   )
// };


// export default PrivateRoutes;