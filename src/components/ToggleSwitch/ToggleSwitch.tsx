import React, { Component } from 'react';
import './ToggleSwitch.scss';

export default class ToggleSwitch extends Component<any, any> {
  state = { active: false };
  firstLoad: boolean = true;

  async onInputChange(event: any): Promise<void> {
    localStorage.setItem('cc:colorTheme', event.target.checked);
    return this.setState({ active: event.target.checked });
  }

  UNSAFE_componentWillMount(): void {
    const res = localStorage.getItem('cc:colorTheme');
    const value = res === 'true' ? true : false;

    if (value !== this.state.active) {
      this.setState({ active: value });
    }
  }

  componentDidUpdate(): void {
    if (this.firstLoad) {
      this.firstLoad = false;
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
          defaultChecked={this.state.active}
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
