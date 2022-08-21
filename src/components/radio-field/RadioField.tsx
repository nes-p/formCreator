import classnames from "classnames";
import { FC } from "react";
import '../../form.css'

export interface RadioProps {
    label: string;
    radios: [string]
}

export const RadioField: FC<RadioProps> =({label, radios}) => {
   const name = 'radioGroup' + Math.random();
    return (
        
    <fieldset className="fieldset">
   <label className={classnames(["capitalize", "label"])}>
            {label}
    <div className="radioGroup">
        {radios.map(radio => (
            <div key={radio}>
            <label className="clearTransform">
                 {radio}          
             <input type="radio" name={name} value={radio}/>
             </label> 
             </div>
        ))}
        </div>
          </label> 
    </fieldset>
    );
}