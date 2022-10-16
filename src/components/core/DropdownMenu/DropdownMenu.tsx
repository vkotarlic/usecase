import React from 'react';
import { Menu } from '@headlessui/react';
import { ReactComponent as MenuIcon } from 'assets/MenuIcon.svg';
import './DropdownMenu.scss';

interface MenuItem {
  url: string;
  name: string;
  active?: boolean;
}

interface MenuProps {
  menuItems: MenuItem[];
}

const DropdownMenu = ({ menuItems }: MenuProps) => {
  return (
    <Menu as="div" className="c-menu">
      <Menu.Button className="c-menu__button">
        <MenuIcon width={24} height={24} />
      </Menu.Button>
      <Menu.Items as="div" className="c-menu__items">
        {menuItems.map((item, i) => (
          <Menu.Item key={i}>
            {({ active }) => (
              <a
                className={`${
                  active || item.active ? 'c-menu__item c-menu__item--active' : 'c-menu__item'
                }`}
                href={item.url}
              >
                {item.name}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default DropdownMenu;
