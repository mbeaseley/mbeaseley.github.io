import React, { FC, useState } from 'react';
import './Icon.scss';

interface iconProps {
  name: string;
  isLabel: boolean;
}

const Icon: FC<iconProps> = ({name, isLabel}) => {
  let [img, setImg] = useState('');
  import (`../../assets/icons/${name}.svg`).then((icon) => {
    setImg(icon.default);
  })
  .catch((error) => {
    console.warn(error);
  });

  const addWhiteBg = (name.includes('Stencil')) ? "icon--white-bg": "";

  return (
    <div className='icon'>
      <img className={`${addWhiteBg}`}  src={img} alt={name} title={name}></img>
      {isLabel ? <p>{name}</p> : null}
    </div>
  )
}

export default Icon;
