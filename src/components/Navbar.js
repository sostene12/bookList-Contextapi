import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
   const { books } =  useContext(BookContext);
    return ( 
         <div className="navbar">
            <h1>Ninja reading List</h1>   
            <p>currently you have {books.length} books to get through...</p>  
        </div>
     );
}
 
export default NavBar;
