import React from 'react';

import './guesscount.css';

export default function GuessCount(props) {
  return (
    <p>
      Guess #<span id="count">{props.count}</span>!
    </p>
  );
}