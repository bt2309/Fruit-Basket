// import { useState } from "react";
import { NavLink } from "react-router-dom";

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

export default function NavBar() {

    // const [user, setUser] = useState([])
    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     await createUser({name: user})


    // }
    // const handleChange = (event) =>{
    //     setUser(event.target.value)

    // }
    
    return (
   
   <nav id="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/films">Films</NavLink>
            {/* <form onSubmit = {handleSubmit}>
            <input
            name = "username"
            value = {user}
            onChange = {handleChange}
            ></input>
            <button type = "submit">Submit</button>
            </form> */}
        </nav>
    
        
    
    );
}