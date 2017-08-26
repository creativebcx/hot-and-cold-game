import React from 'react';

export default class InfoModel extends React.Component {
  onClose(event) {
    event.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className="overlay" id="model">
        <div className="content">
          <h3>What do I do?</h3>
          <div>
            <p>This is a Hot or Cold Number Guessing Game.  The game goes like this: </p>
            <ul>
              <li>1. I pick a <strong>random secret number</strong> between 1 and 100.</li>
              <li>2. You need to guess until you can find the hidden secret number.</li>
              <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
            </ul>
            <p>Are you ready!?!</p>
            <a className="close" href="#" onClick={e => this.onClose(e)}>Got It!</a>
          </div>
        </div>
      </div>
    );
  }
}