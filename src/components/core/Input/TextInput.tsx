import React from 'react';
import './TextInput.scss';

interface InputProps {
  disabled?: boolean;
  error?: boolean;
  label?: string;
  name: string;
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const TextInput = ({ disabled, error, label, name, placeholder, onChange }: InputProps) => {
  return (
    <div className="c-text-input">
      {label && <label>{label}</label>}
      <input
        className={`c-text-input__input ${error ? 'c-text-input__input--error' : ''}`}
        type="text"
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
