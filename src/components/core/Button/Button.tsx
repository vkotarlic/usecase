import React from 'react';
import './Button.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label: string | React.ReactNode;
  onClick: () => void;
}

const Button = ({ type, label, onClick }: ButtonProps) => {
  return (
    <button type={type} className="c-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
