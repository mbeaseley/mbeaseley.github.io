import React, { Component } from 'react';
import './ToggleSwitch.scss';

export default class ToggleSwitch extends Component<any, any> {
  state = { active: false };

  onInputChange = async (): Promise<void> => {
    return this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div className='toggle'>
        <input
          className='toggle__switch'
          id={`switch`}
          onChange={this.onInputChange}
          type='checkbox'
        />
        <label className='toggle__label' htmlFor={`switch`}>
          <span />
        </label>
      </div>
    );
  }
}
