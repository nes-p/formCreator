import classnames from "classnames";
import { FC } from "react";

export interface TextProps {
    label: string;
    className?: string;
}

export const TextField:FC<TextProps> =({label}) => {
    return (
        <fieldset className="fieldset">
        <label className={classnames(["capitalize", "label"])}>
            {label}    
        <input className="input"/>
        </label> 
    </fieldset>
    );
}