import classnames from "classnames";
import { FC } from "react";
import '../../form.css'

export interface DateProps {
    label: string;  
}

export const DateField:FC<DateProps> =({label}) => {
    return (
        <fieldset className="fieldset">
       <label className={classnames(["capitalize", "label"])}>
            {label}      
        <input className="input" type="date"/>
        </label> 
    </fieldset>
    );
}