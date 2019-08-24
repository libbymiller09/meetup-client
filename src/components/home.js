import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">

        <header>
          <h2>How to use this app!</h2>
        </header>

        <div>

          <p>Finding people to study with is hard.</p>

          <p>With this application, easily find and connect with meetups and study sessions near you!</p>

          <h3>You can... </h3>

          <h2>Checkout the Map!</h2>

          <p>See if there are any peers meeting in your area! Meetups are shown with handy markers. </p>

          <p>Click the pin to see more details</p>

          <h2>Look for a Buddy now!</h2>

        </div>

        <footer className="footer">
          Created by 
          <a href="https://github.com/libbymiller09" className="footer__link">&copy; Elisabeth Miller </a>
          2019
        </footer>
      </div>
    );
  }
}

export default Home;