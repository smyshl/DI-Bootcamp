import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';


function NavBar (){

    return (
      <>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
      </>
    );
};


export default NavBar;