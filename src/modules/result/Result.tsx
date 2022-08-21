import { FC } from "react";
import Button from "../../components/button/Button";
import { CheckBoxField } from "../../components/checkbox-field/CheckboxField";
import { DateField } from "../../components/date-field/DateField";
import { NumberField } from "../../components/number-field/NumberField";
import Panel from "../../components/panel/Panel";
import { RadioField } from "../../components/radio-field/RadioField";
import { TextAreaField } from "../../components/text-area/TextArea";
import { TextField } from "../../components/text-field/TextField";
import { FieldsTypes, stubResult } from "../../lib/utils/constants";
import { isJsonString } from "../../lib/utils/isJson";
import _noop from 'lodash/noop';
import './../result/result.css';

export interface ResultProps{
    configData: string
    applied: boolean;
}

interface ResultsData<T> {
      items: T[];  
      formData?: {
        formTitle?: string,
        buttons?: [string]
      }    
  }

interface Item {
    label: string;
    type: string;
    [otherOptions: string]: unknown;
} 

const Result:FC<ResultProps> = ({configData, applied}) => {

    const resultData: ResultsData<Item> = configData && isJsonString(configData) && JSON.parse(configData);
          
    const isRender = configData && applied &&  resultData.items;    
return (    
    <Panel>
        {
          isRender ? (
                <form className="form">
                <h4 className="title">
                    {
                       resultData.formData?.formTitle 
                    }
                    </h4>
                    {
                resultData.items.map((item) => {                    
                    const key = FieldsTypes.find(el => el.includes(item.type));                      
                      switch (key)  {
                        case 'numberfield': 
                        return <NumberField label={item.label} key={item.label}/>
                        case 'textfield':
                          return  <TextField label={item.label} key={item.label}/>
                        case 'textarea':    
                        return <TextAreaField label={item.label} key={item.label}/>
                        case 'checkbox':
                          return  <CheckBoxField label={item.label} key={item.label}/> 
                        case 'dateflied':
                          return  <DateField label={item.label} key={item.label}/>
                        case 'radio buttons':
                           return <RadioField label={item.label} radios={item.radios as [string]} key={item.label}/> 
                       }       
                })
             } 
             <div className="results-btns">
                {resultData.formData?.buttons?.map(btnText => {
                    return <Button btnLabel={btnText} 
                    // onClick={_noop}
                    key={btnText} 
                    />
                })}
             </div>
             </form>
            )
            :
            <code className="stub">{stubResult}</code> 
        }
        
    </Panel>
);
}

export default Result;