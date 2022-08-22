import classnames from "classnames";
import { FC } from "react";
import '../../form.css'

export interface CheckBoxProps {
    label: string;    
}

export const CheckBoxField: FC<CheckBoxProps> =({label}) => {
    return (        
        <fieldset className="fieldset">
        <label className={classnames(["capitalize", "label"])}>
            {label}
        <div className="checkboxInput">
        <input className="input" type="checkbox"/>
        </div>
        </label> 

    </fieldset>
    );
}