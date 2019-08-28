import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import MapContainer from './components/map';
import AddBtn from './components/add-btn';
import Modal from './components/modal';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={MapContainer} />
          {/* <Route exact path="/meetup/:id" component={Map} /> */}
          <Route exact path="/modal" component={AddBtn} />
        </main>
      </div>
    </Router>
  );
}