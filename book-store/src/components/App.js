import React from 'react';
import {Link} from 'react-router';

const App = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Scotch Books</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Book</Link></li>
              <li><Link to="/">Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default App;
