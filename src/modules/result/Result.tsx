import { FC } from "react";
import Button from "../../components/button/Button";
import { CheckBoxField } from "../../components/checkbox-field/CheckboxField";
import { DateField } from "../../components/date-field/DateField";
import { NumberField } from "../../components/number-field/NumberField";
import Panel from "../../components/panel/Panel";
import { RadioField } from "../../components/radio-field/RadioField";
import { TextAreaField } from "../../components/text-area/TextArea";
import { TextField } from "../../components/text-field/TextField";
import { capitalizeFirstLetter } from "../../lib/utils/capitalize";
import { FieldsTypes } from "../../lib/utils/constants";
import { elementsDictionary } from "../../lib/utils/ElementsDictionary";

export interface ResultProps{
    configData: string
    applied: boolean;
}

interface ResultsData<T> {
      items: T[];  
      formData: {
        formTitle: string,
        buttons: [string]
      }    
  }

interface Item {
    label: string;
    type: string;
    [otherOptions: string]: unknown;
} 

const Result:FC<ResultProps> = ({configData, applied}) => {
    const resultData: ResultsData<Item> = JSON.parse(configData);

return (    
    <Panel>
        {
            applied && (
                <form>
                <h4>
                    {
                       resultData.formData.formTitle 
                    }
                    </h4>
                    {
                resultData.items.map((item) => {                    
                    const key = FieldsTypes.find(el => el.includes(item.type));                      
                      switch (key)  {
                        case 'numberfield': 
                        return <NumberField label={capitalizeFirstLetter(item.label)}/>
                        case 'textfield':
                          return  <TextField label={capitalizeFirstLetter(item.label)}/>
                        case 'textarea':    
                        return <TextAreaField label={capitalizeFirstLetter(item.label)}/>
                        case 'checkbox':
                          return  <CheckBoxField label={capitalizeFirstLetter(item.label)}/> 
                        case 'dateflied':
                          return  <DateField label={capitalizeFirstLetter(item.label)}/>
                        case 'radio buttons':
                           return <RadioField label={capitalizeFirstLetter(item.label)} radioOne={item.radioOne as string} radioTwo={item.radioTwo as string}/> 
                       }       
                })
             } 
             <div>
                {resultData.formData.buttons.map(btnText => {
                    return <Button btnLabel={btnText}/>
                })}
             </div>
             </form>
            )
        }
        
    </Panel>
);
}

export default Result;