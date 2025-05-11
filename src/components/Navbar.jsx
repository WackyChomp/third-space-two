import React from 'react';
import { navLinks } from '../../constants';

const Navbar = () => {

  return (
    <header className='navbar'>
      <div className="inner">
        <a href="#hero">Walter | Meister</a>

        <nav className='desktop'>
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a href={link}>
                  <span>{name}</span>
                  <span className=''/>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact">
          <div className="inner">
            <span>Say My Name and Summon</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default Navbar