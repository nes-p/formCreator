import React, { FC } from 'react';
export interface ButtonProps {
    btnLabel: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({btnLabel, onClick}) => {
return (
    <button onClick={onClick}>{btnLabel}</button>
);
}

export default Button;