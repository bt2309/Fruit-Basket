// import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    
    return (
        
        <nav id="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/films">Films</NavLink>
            <NavLink to="/characters">Characters</NavLink>
        </nav>
    
        
    
);
}

// const createUser = async() => {
//     const url = `https://api.airtable.com/v0/appRfcriPedzqlVwe/Table%201`;
//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             body: JSON.stringify(),
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: "Bearer patM5n44wP14SyEwb.e60b03fb6b354d0435efb2524b3b63ff29203d43629fa5fc53f2759e46ddad82"
//             },
//           });
      
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       // console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }