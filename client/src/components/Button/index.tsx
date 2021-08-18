import { ButtonHTMLAttributes } from 'react';

import { MotionButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  background: string;
  color: string;
};

export const Button: React.FC<ButtonProps> = ({
  background,
  color,
  children,
  ...rest
}) => {
  return (
    <>
      <MotionButton
        type="button"
        initial={{ color: `${color}`, background: `${background}` }}
        whileHover={{ color: `${background}`, background: `${color}` }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </MotionButton>
    </>
  );
};
