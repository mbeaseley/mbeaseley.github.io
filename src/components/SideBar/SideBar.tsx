import React from 'react';
import './SideBar.scss'
import profile from '../../assets/profile.jpg';
import Separator from '../Separator/Separator';
// import Button from '../Button/Button';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';

export default class SideBar extends React.Component {
  render() {
    return (
      <div className='sidebar' >
        <h1>Project Dashboard</h1>
        <img src={profile} alt='profile' />
        <h2>Michael Beaseley</h2>
        <h3>Full Stack Developer</h3>
        <div className="sidebar__footer">
          <Separator />
          <div className="sidebar__footer--icons">
            <a href='https://github.com/mbeaseley'><Github /></a>
            <a href='https://www.linkedin.com/in/michael-beaseley-817b5a101/'><Linkedin /></a>
            <a href='https://twitter.com/MTBeaseley'><Twitter /></a>
          </div>
        </div>
      </div>
    );
  }
}
