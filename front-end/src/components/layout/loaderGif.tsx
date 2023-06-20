import React from 'react';
import loaderImage from '../../assets/loader-1.gif';

const LoaderGif: React.FC = () => {
  return (
    <img src={loaderImage} alt='photo' style={{ width: 'auto', margin: '0 auto' }} />
  );
};

export default LoaderGif;
