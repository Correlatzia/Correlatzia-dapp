import React from 'react';

function Header() {
  return (
    <header className="nav-header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;
