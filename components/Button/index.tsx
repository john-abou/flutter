import React from 'react';

export interface ButtonProps {
  /** The color for the button */
  color?: string;
  /** The size of the button */
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ color, size }) => {
  return <button style={{ color, fontSize: size }}>{color}</button>;
}