import React, { useEffect, useState } from 'react';

import './Loader.scss';

interface ILoader {
  size: 'sm' | 'lg' | 'xl';
  color: string;
}

const Loader: React.FC<ILoader> = ({ size, color }) => {
  const [width, setWidth] = useState(40);
  const [borderWidth, setBorderWidth] = useState(4);

  useEffect(() => {
    switch (size) {
      case 'sm':
        setBorderWidth(2);
        setWidth(20);
        break;
      case 'lg':
        setBorderWidth(4);
        setWidth(40);
        break;
      case 'xl':
        setBorderWidth(8);
        setWidth(80);
        break;
    }
  }, [size]);
  return (
    <div
      className="loader"
      style={{ width, height: width, borderTop: `${borderWidth}px solid ${color}`, borderWidth }}
    />
  );
};

export default Loader;
