import React, { Component } from 'react';
import './SettingModal.scss';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';

interface ModalProps {
  show: boolean;
  close: any;
}

export default class SettingModal extends Component<ModalProps, any> {

  render() {
    if (this.props.show) {
      return (
        <div className='modal fadeIn'>
          <div className='modal__content'>
            <div className='modal__header'>
              <div className='modal__header--placeholder'></div>
              <h1>SETTINGS</h1>
              <button 
                className="button button--medium button--color-white button--text" 
                onClick={this.props.close}>
                <Close />
              </button>
            </div>
            <div className='modal__body'>
              
            </div>
          </div>
        </div>
      )
    }
    
    return (
      '' 
    )
  }
  // if (show) {
  //   console.log(show);
  //   return (
  //     <div className='modal'>
  //       <div className='modal__content'>
  //         <div className='modal__header'>
  //           <div className='modal__header--placeholder'></div>
  //           <h1>SETTINGS</h1>
  //           <Button name="close" size="medium" classType="text" icon={<Close />} />
  //         </div>
  //         <div className='modal__body'>
            
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  // return (
  //   <div className='modal modal--no-content'></div>
  // )
}
