import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Team from './Team'
import Gallery from './Gallery'
import './App.css';

const menu = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/team',
        name: 'Team',
    },
    {
        path: '/gallery',
        name: 'Gallery',
    }

];

class App extends Component {
  constructor() {
    super();
      this.state = {
      gallery: [],
      }

  }

  componentWillMount() {
      const endPoint ='https://pixabay.com/api/?key=';
      const apiKey = '5018958-ed49ccd90878e6614abdf24a6';
      fetch(endPoint+apiKey+'&category=food&order=popular&per_page=9')
          .then(res => {
            return res.json()
          })
      .then(data => (
          // console.log(data.hits)
      data.hits
      ))
          .then(result => {
              this.setState({
                  gallery: [...this.state.gallery, ...result]
              })

          })
  }

  render() {
    return (
      <div className="App">
          <h2>Simple Routing and subrouting</h2>
        <Header nav={menu}/>
        <div className="content">
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/team' component={Team}/>
          <Route path='/gallery' render = {() => <Gallery pictures={this.state.gallery}/>}/>
            {/*<Redirect to='/'/>*/}
           {/*<Route render ={() => <h2>PAGE NOT FOUND</h2> }/>*/}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
