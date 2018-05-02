import React from 'react';
import {NavLink} from 'react-router-dom'
import './index.css';

const Header = ({nav}) => (
    <ul className="header">
        {nav.map((item) => (
            <li key={item.name}>
                <NavLink exact to={item.path}>
                    {item.name}
                </NavLink>
            </li>
        ))}
    </ul>
);

export default Header