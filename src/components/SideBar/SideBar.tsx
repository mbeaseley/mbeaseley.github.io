import React from 'react';
import './SideBar.scss';
import profile from '../../assets/profile.jpg';
import Separator from '../Separator/Separator';
import SettingModal from '../SettingModal/SettingModal';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';

export default class SideBar extends React.Component {
  state = { modal: false };

  showModal(): void {
    this.setState({ modal: true });
  }

  hideModal(): void {
    this.setState({ modal: false });
  }

  render(): JSX.Element {
    return (
      <div id='sidebar'>
        <div className={this.state.modal ? 'sidebar sidebar--blackout' : 'sidebar'}>
          <div className='sidebar__container'>
            <h1>Project Dashboard</h1>
            <img src={profile} alt='profile' />
            <h2>Michael Beaseley</h2>
            <h3>Full Stack Developer</h3>
            <Separator />
            <button
              className='button button--medium button--primary button--none'
              type='button'
              onClick={() => this.showModal()}
            >
              Settings
            </button>
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
        <SettingModal show={this.state.modal} close={() => this.hideModal()}></SettingModal>
      </div>
    );
  }
}
