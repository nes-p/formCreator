import React, { FC } from 'react';
export interface ButtonProps {
    btnLabel: string;
}

const Button: FC<ButtonProps> = ({btnLabel}) => {
return (
    <button>{btnLabel}</button>
);
}

export default Button;