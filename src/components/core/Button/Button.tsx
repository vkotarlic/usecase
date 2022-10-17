import React from 'react';
import './Button.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  style: 'primary' | 'secondary';
  label: string | React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type, style, label, onClick }: ButtonProps) => {
  return (
    <button type={type} className={`c-button c-button--${style}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
