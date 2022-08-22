import classnames from "classnames";
import { FC } from "react";
import '../../form.css'

export interface NumberProps {
    label: string;
   
}

export const NumberField:FC<NumberProps> =({label}) => {
    return (        
        <fieldset className="fieldset">
        <label className={classnames(["capitalize", "label"])}>
            {label}    
        <input className="input" type="number"/>
        </label> 
    </fieldset>
    );
}