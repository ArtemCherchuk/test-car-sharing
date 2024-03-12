import { NavLink } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';

import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <div className={css.logoContainer}>
            <NavLink to="/">
              <FaCar />
            </NavLink>
          </div>
          <div className={css.navContainer}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : '')}
            >
              Home
            </NavLink>
            <NavLink
              to="/catalog"
              className={({ isActive }) => (isActive ? css.active : '')}
            >
              Catalog
            </NavLink>
            <NavLink
              to="/favorite"
              className={({ isActive }) => (isActive ? css.active : '')}
            >
              Favorite
            </NavLink>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};
