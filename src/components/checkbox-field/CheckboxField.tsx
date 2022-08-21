import classnames from "classnames";
import { FC } from "react";
import '../../form.css'

export interface CheckBoxProps {
    label: string;
    className?: string;
}

export const CheckBoxField: FC<CheckBoxProps> =({label, className}) => {
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