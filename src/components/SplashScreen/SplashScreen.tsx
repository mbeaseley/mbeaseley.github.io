import React, { Component } from "react";
import './SplashScreen.scss';
import Icon from '../Icon/Icon';

export default class SplashScreen extends Component<any, any> {
  render() {
    setTimeout(() => {
      const el = document.querySelector('.splash-screen__container');
      if (!el?.classList.value.includes('splash-screen__container--fadeout')) {
        el?.classList.add('splash-screen__container--fadeout');
      }

      setTimeout(() => {
        const el = document.querySelector('.splash-screen');
        if (!el?.classList.value.includes('splash-screen--fadeout')) {
          el?.classList.add('splash-screen--fadeout');
        } 
      }, 2000);
    }, 2000);

    return (
      <div className="splash-screen">
        <div className="splash-screen__container">
          <Icon key="logo" name="Project-logo" isLabel={false}/>
          <h1>Project Dashboard</h1>
        </div>
      </div>
    )
  }
}