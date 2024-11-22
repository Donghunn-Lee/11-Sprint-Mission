import { Link } from 'react-router-dom';
import './Header.css';
import { ReactNode } from 'react';

interface HeaderProps {
  leftMenu: ReactNode;
  rightMenu: ReactNode;
}

function Header({ leftMenu, rightMenu }: HeaderProps) {
  return (
    <header>
      <nav className='nav-bar'>
        <div className='menu-wrapper'>
          <Link to='/' aria-label='Panda Market Home'>
            <img id='logo' src='/images/logos/logo.png' alt='판다마켓 로고' />
          </Link>
          <div className='menu'>{leftMenu}</div>
        </div>
        <div className='right-menu'>{rightMenu}</div>
      </nav>
    </header>
  );
}

export default Header;
