import React, { Component } from 'react';
import './ToggleSwitch.scss';

export default class ToggleSwitch extends Component<any, any> {
  state = { active: false };
  firstLoad: boolean = false;

  async onInputChange(): Promise<void> {
    return this.setState({ active: !this.state.active });
  }

  componentDidUpdate(): void {
    if (!this.firstLoad) {
      this.firstLoad = true;
      return;
    }

    this.props.handleClick(this.state.active);
  }

  render() {
    return (
      <div className='toggle'>
        <input
          className='toggle__switch'
          id={`switch`}
          onChange={this.onInputChange.bind(this)}
          type='checkbox'
        />
        <label className='toggle__label' htmlFor={`switch`}>
          <span />
        </label>
      </div>
    );
  }
}
