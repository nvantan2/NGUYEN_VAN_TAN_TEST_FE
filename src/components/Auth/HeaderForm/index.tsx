import React from 'react';

import './HeaderForm.scss';
import Logo from '../../../assets/images/logo.svg';

interface IProps {
  title: string;
  description: string;
}

const HeaderFormAuth: React.FC<IProps> = ({ title, description }) => {
  return (
    <div className="header-form">
      <div className="header-form__logo">
        <img src={Logo} alt="logo" />
      </div>
      <h4 className="header-form__title">{title}</h4>
      <p className="header-form__description">{description}</p>
    </div>
  );
};

export default HeaderFormAuth;
