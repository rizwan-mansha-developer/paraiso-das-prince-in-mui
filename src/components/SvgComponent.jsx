// SvgComponent.js
import React from 'react';

const SvgComponent = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export default SvgComponent;
