import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';
// import {NavLink} from 'react-router-dom'
import Nav from '../Nav';
import players from '../../data';
import Player from '../Player';

const menu = [
    {
        path: '/about',
        name: 'About',
    },
    {
        path: '/contact',
        name: 'Contact',
    }
];

const makeNavInfo = (players, path) => (
    players.map(p => (
        {
            path: `${path}/${p.id}`,
            name: p.name,
        }
    ))
);

const findPlayer = (players, id) => (
    players.find(p => (p.id === +id))
);

const Team = (props) => {
    // console.log(props);
    // console.log(makeNavInfo(players, props.match.path));
    return (
        <div>
        <h2>Team</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
            rhoncus eget sapien:</p>
            <Nav menu={menu} destination={props.match.path}/>
        <Switch>
            <Route path={`${props.match.path}/about`} component={About}/>
            <Route path={`${props.match.path}/contact`} component={Contact}/>
        </Switch>
            <Nav menu={makeNavInfo(players, props.match.path)}/>
            <Route path='/team/:playerId'
                   render={props => {
                // const ID = props.match.params.playerId;
                // const player = findPlayer(players,ID);
                // console.log(player);
                // console.log(props.match.params.playerId);
                // console.log(findPlayer(players, props.match.params.ID));
                       if (findPlayer(players,props.match.params.playerId)) {
                           return <Player info={findPlayer(players,props.match.params.playerId)}/>
                       }
                       return null;

            }}/>
        </div>
    )
};

export default Team;