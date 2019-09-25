import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
      <div className="ui left vertical inverted sidebar menu visible sideb">
        <a className="item">
          <i className="chart bar outline icon sideb-element"></i>
          <p className="sideb-text">Dashboard</p>
        </a>
        <a className="item">
          <i className="money bill alternate outline icon sideb-element"></i>
          <p className="sideb-text">Income</p>
        </a>
        <a className="item">
          <i className="dollar sign icon sideb-element"></i>
          <p className="sideb-text">Expenses</p>
        </a>
      </div>
    )
}

export default Sidebar;