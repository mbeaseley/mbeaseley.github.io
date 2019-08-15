import React, { FC, useState } from 'react';
import './Icon.scss';

interface iconProps {
  name: string;
}

const Icon: FC<iconProps> = ({name}) => {
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
      <p>{name}</p>
    </div>
  )
}

export default Icon;

// let [imgsrc, setImgsrc] = useState('');
//     const imgName = name.toLowerCase().replace(' ', '');
//     import(`../../data/images/logos/${imgName}-icon.svg`).then((logo) => {
//         setImgsrc(logo.default);
//     });

//     // Stencil logo is black so need to add a white background.
//     // In theory if there are more logos like this, we could make an array of them to check against
//     const addWhiteBg = (name.includes('Stencil') ? "add-white-bg" : "")

//     return (
//         <div className="tech-icon">
//             <img className={`tech-icon__icon ` + addWhiteBg}  src={imgsrc} alt={name} title={name}></img>
//             <p>{name}</p>
//         </div>
//     );