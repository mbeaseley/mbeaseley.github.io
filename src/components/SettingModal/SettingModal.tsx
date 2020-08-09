import React, { Component } from 'react';
import './SettingModal.scss';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

interface ModalProps {
  show: boolean;
  close: any;
}

export default class SettingModal extends Component<ModalProps, any> {
  render(): JSX.Element {
    if (this.props.show) {
      return (
        <div className='modal fadeIn'>
          <div className='modal__content'>
            <div className='modal__header'>
              <div className='modal__header--placeholder'></div>
              <h1>SETTINGS</h1>
              <button
                className='button button--medium button--color-white button--text'
                onClick={this.props.close}
              >
                <Close />
              </button>
            </div>
            <div className='modal__body'>
              <h2>THEME</h2>
              <div className='modal__theme'>
                <div className='modal__theme-container'></div>
                <div className='modal__theme-container'></div>
                <div className='modal__theme-container'></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div></div>;
  }
}
