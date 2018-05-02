import React from 'react'
import {NavLink} from 'react-router-dom';
import './index.css';


const Nav = ({menu, destination}) => {
    return(
            <ul className='tag'>
                {menu.map(item => (
                    <li className='tag-item'
                    key={item.name}
                    >
                        <NavLink to={`${destination}${item.path}`}>{item.name}</NavLink>
                    </li>
                ))}
            </ul>
    )
};

Nav.defaultProps = {
    destination: '',
}

export default Nav