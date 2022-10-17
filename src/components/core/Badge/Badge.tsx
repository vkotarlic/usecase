import React from 'react';
import './Badge.scss';

interface BadgeProps {
  label: string;
  size: 'small' | 'medium';
}

const Badge = ({ label, size }: BadgeProps) => {
  return <span className={`c-badge c-badge--${size}`}>{label}</span>;
};

export default Badge;
