import React, { useEffect } from 'react';
import './Navigation.scss';
import DropdownMenu from 'components/core/DropdownMenu/DropdownMenu';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const url = useLocation();
  const menuItems = [
    { name: 'Page 1', url: 'page-1', active: false },
    { name: 'Page 2', url: 'page-2', active: false }
  ];

  useEffect(() => {
    menuItems.forEach((item) => {
      item.active = url.pathname.includes(item.url);
    });
  }, [url]);

  return (
    <div className="c-navigation">
      <div className="c-navigation__container">
        <h2 className="c-navigation__logo">GH Search</h2>
        <div className="c-navigation__actions">
          <Link
            to={'/'}
            className={`c-navigation__action ${
              url.pathname === '/' ? 'c-navigation__action--active' : ''
            }`}
          >
            Search
          </Link>
          <Link
            to={'/history'}
            className={`c-navigation__action ${
              url.pathname.includes('history') ? 'c-navigation__action--active' : ''
            }`}
          >
            History
          </Link>
        </div>
      </div>
      <div className="c-navigation__menu">
        <DropdownMenu menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Navigation;
