import classnames from "classnames";
import { FC } from "react";

export interface TextAreaProps {
    label: string;
    className?: string;
}

export const TextAreaField:FC<TextAreaProps> =({label}) => {
    return (
        <fieldset className="fieldset">
        <label className={classnames(["capitalize", "label"])}>
                {label}
               <textarea  className="input"/>
               </label> 
        </fieldset>
        
    );
}