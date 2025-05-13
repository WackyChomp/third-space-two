
import { useState, useEffect } from 'react';
import { navLinks } from '../../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not_scrolled'}`}>
      <div className="navbar_inner">
        <a href="#hero">Walter | Meister</a>

        <nav className='desktop'>
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className=''>
                <a href={link}>
                  <span>{name}</span>
                  <span className='underline'/>
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