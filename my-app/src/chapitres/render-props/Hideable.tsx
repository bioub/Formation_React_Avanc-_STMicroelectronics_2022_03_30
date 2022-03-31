import React, { Component, PropsWithChildren } from 'react';

type Prop = {
  defaultShow?: boolean;
}

class Hideable extends Component<PropsWithChildren<Prop>> {
  state = {
    show: this.props.defaultShow ?? false,
  };
  handleClick = () => {
    const { show } = this.state;
    this.setState({
      show: !show
    })
  }
  render() {
    const { defaultShow, children } = this.props;
    const { show } = this.state;
    return (
      <div className="Hideable">
        {show && children}
        <button onClick={this.handleClick}>{show ? 'Off' : 'On'}</button>
      </div>
    );
  }
}

export default Hideable;
