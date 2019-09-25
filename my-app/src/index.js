import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);