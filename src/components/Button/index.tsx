import React, { Children } from 'react';
import Loader from '../Loader';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<IButtonProps> = ({ isLoading, children, ...props }) => {
  return (
    <button {...props} disabled={isLoading}>
      {isLoading && <Loader color="#fff" size="sm" />}
      {children}
    </button>
  );
};

export default Button;
