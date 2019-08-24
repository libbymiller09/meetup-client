import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/home';
import MapContainer from './components/map';
import Modal from './components/modal';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <header>
          <h1><Link to="/">Meetups</Link></h1>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={MapContainer} />
          {/* <Route exact path="/meetup/:id" component={Map} /> */}
          <Route exact path="/modal" component={Modal} />
        </main>
      </div>
    </Router>
  );
}