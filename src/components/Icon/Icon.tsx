import React, { FC, useState } from 'react';
import './Icon.scss';

interface IconProps {
  name: string;
  isLabel: boolean;
}

const Icon: FC<IconProps> = (props: IconProps) => {
  const [img, setImg] = useState('');
  const name = props.name;
  const isLabel = props.isLabel;

  import(`../../assets/icons/${name}.svg`)
    .then((icon) => {
      setImg(icon.default);
    })
    .catch((error) => {
      console.error(error);
    });

  // Hack for svg
  const addWhiteBg = props.name.includes('Stencil') ? 'icon--white-bg' : undefined;

  return (
    <div className='icon'>
      <img className={`${addWhiteBg}`} src={img} alt={name} title={name}></img>
      {isLabel ? <p>{name}</p> : null}
    </div>
  );
};

export default Icon;
