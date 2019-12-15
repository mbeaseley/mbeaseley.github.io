import React, { FC } from 'react';
import './Button.scss';

interface buttonProps {
    name: string;
    text: string;
    classType: string;
    size: string;
}

const Button: FC<buttonProps> = ({name, text, classType, size}) => {
    const classList = `button button--${size} button--${classType}`;

    return (
      <button id={name} className={`${classList}`} type='button'>
          {text}
      </button>
    )
}
  
  export default Button;