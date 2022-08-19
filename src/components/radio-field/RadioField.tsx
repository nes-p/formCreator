import { FC } from "react";

export interface RadioProps {
    label: string;
    radioOne: string;
    radioTwo: string;
}

export const RadioField: FC<RadioProps> =({label, radioOne, radioTwo}) => {
   const name = 'radioGroup' + Math.random();
    return (
        
        <fieldset>
        <label>
            {label}
        </label>
        <label>
            {radioOne}
        </label> 
        <input type="radio" name={name} value={radioOne}/>
        <label>
            {radioTwo}
        </label> 
        <input type="radio" name={name} value={radioTwo}/>
    </fieldset>
    );
}