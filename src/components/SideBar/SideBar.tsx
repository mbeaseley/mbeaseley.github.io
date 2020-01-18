import React from 'react';
import './SideBar.scss'
import profile from '../../assets/profile.jpg';
import Separator from '../Separator/Separator';
import SettingModal from '../SettingModal/SettingModal';
// import Button from '../Button/Button';
import { ReactComponent as Github } from '../../assets/icons/Github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/Linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/icons/Twitter.svg';

export default class SideBar extends React.Component {
  state = { modal: false };

  showModal (): any {
    this.setState({modal: true})
  }

  hideModal(): any {
    this.setState({modal: false})
  }

  render() {
    return (
      <div className={this.state.modal ? 'sidebar sidebar--blackout' : 'sidebar'}>
        <div className='sidebar__container' >
          <h1>Project Dashboard</h1>
          <img src={profile} alt='profile' />
          <h2>Michael Beaseley</h2>
          <h3>Full Stack Developer</h3>
          <Separator />
          <button 
            className="button button--medium button--primary" 
            type="button" 
            onClick={() => this.showModal()}>
            Settings
          </button>
          <div className="sidebar__footer">
            <Separator />
            <div className="sidebar__footer--icons">
              <a href='https://github.com/mbeaseley'><Github /></a>
              <a href='https://www.linkedin.com/in/michael-beaseley-817b5a101/'><Linkedin /></a>
              <a href='https://twitter.com/MTBeaseley'><Twitter /></a>
            </div>
          </div>
        </div>
        <SettingModal show={this.state.modal} close={() => this.hideModal()}></SettingModal>
      </div>
    );
  }
}
