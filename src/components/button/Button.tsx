import classNames from 'classnames';
import React, { FC } from 'react';
import './button.css';

export interface ButtonProps {
    btnLabel: string;
    onClick?: () => void;
    className?: string;
}

const Button: FC<ButtonProps> = ({btnLabel, onClick, className}) => {
return (
    <button onClick={onClick} className={classNames(['btn', className])}>{btnLabel}</button>
);
}

export default Button;