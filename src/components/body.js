import React from 'react';

import './body.css';
import Game from './game';
import Header from './header';

export default function Body() {
  return (
    <div className='body'>
      <Header />
      <h1>HOT or COLD </h1>
      <div className='inner-box'>
        <Game />
      </div>
    </div>
    );
}
