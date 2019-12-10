import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
 const MainMenue = () => {
     return(
         
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <ul className="navbar-nav w-100 ">
                 <li className="nav-item active"><Link  to="/"  >Home</Link></li>
                 <li className="nav-item active"><Link to="about"  >About</Link></li>
                 <li className="nav-item active"><Link to="add"  >Add Cont</Link></li>
             </ul>
         </nav>
         
     )
 }

 export default MainMenue;