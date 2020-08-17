import React from 'react';
import './SideBar.scss';
import profile from '../../assets/profile.jpg';
import Separator from '../Separator/Separator';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';

export default class SideBar extends React.Component {
  render(): JSX.Element {
    return (
      <div id='sidebar'>
        <div className='sidebar'>
          <div className='sidebar__container'>
            <h1>Project Dashboard</h1>
            <img src={profile} alt='profile' />
            <h2>Michael Beaseley</h2>
            <h3>Full Stack Developer</h3>
            <Separator />
            <div className='sidebar__footer'>
              <Separator />
              <div className='sidebar__footer--icons'>
                <a href='https://github.com/mbeaseley' aria-label='github'>
                  <Github />
                </a>
                <a
                  href='https://www.linkedin.com/in/michael-beaseley-817b5a101/'
                  aria-label='linkedin'
                >
                  <Linkedin />
                </a>
                <a href='https://twitter.com/MTBeaseley' aria-label='twitter'>
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
