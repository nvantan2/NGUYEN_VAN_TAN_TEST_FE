import React from 'react';

import './WrapperForm.scss';

const WrapperFormAuth: React.FC = ({ children }) => {
  return (
    <div className="auth">
      <div className="auth-form">{children}</div>
    </div>
  );
};

export default WrapperFormAuth;
