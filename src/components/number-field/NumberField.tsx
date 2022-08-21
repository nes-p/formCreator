import classnames from "classnames";
import { FC } from "react";
import '../../form.css'

export interface NumberProps {
    label: string;
    className?: string;
}

export const NumberField:FC<NumberProps> =({label, className}) => {
    return (        
        <fieldset className="fieldset">
        <label className={classnames(["capitalize", "label"])}>
            {label}    
        <input className="input" type="number"/>
        </label> 
    </fieldset>
    );
}