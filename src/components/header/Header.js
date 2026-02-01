

import React from 'react'
import './Header.css';

function Header({ pages, setPage=(page)=>{console.log("setting page to: ", page)} }) {
  return (
    <ul className='header'>
        {pages.map(page=> {return <li className='gradient-text' onClick={()=>setPage(page)}>
            {page}
        </li>})}
    </ul>
  )
}

export default Header