import React, { FC } from 'react';
import './SettingModal.scss';
import Separator from '../Separator/Separator';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';

interface ModalProps {
  show: boolean;
}

const SettingModal: FC<ModalProps> = ({show}) => {
  
  if (show) {
    console.log(show);
    return (
      <div className='modal'>
        <div className='modal__body'>
          <div className='modal__header'>
            <div className='modal__header--placeholder'></div>
            <h1>SETTINGS</h1>
            <button>
              <Close />
            </button>
          </div>
          <Separator />
          <div className='modal__content'>
            
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='modal modal--no-content'></div>
  )
}

export default SettingModal;
