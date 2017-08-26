import React from 'react';

import TopNav from './topnav';
import InfoModel from './infomodel';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showInfoModel: false
    };
  }

  render() {
    let infoModel;
    if (this.state.showInfoModel) {
      infoModel = <InfoModel onClose={() => this.toggleInfoModel()} />;
    }

    return (
      <header>
        <TopNav onInfo={() => this.toggleInfoModel()}
          onNewGame={this.props.onNewGame} />
        {infoModel}
      </header>
    );
  }
};