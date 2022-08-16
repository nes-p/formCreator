import { FC } from "react";
import Button from "../../components/button/Button";
import Panel from "../../components/panel/Panel";
import { elementsDictionary } from "../../lib/utils/ElementsDictionary";

export interface ResultProps{
    configData: string
    applied: boolean;
}

interface ResultsData<T> {
      items: T[];      
  }

interface Item {
    label: string;
    type: string;
    [otherOptions: string]: unknown;
} 

const Result:FC<ResultProps> = ({configData, applied}) => {
    const resultData: ResultsData<Item> = JSON.parse(configData);
    const elementKeys: string[] = [...elementsDictionary.keys()];

return (    
    <Panel>
        {
            applied && (
                resultData.items.map((item) => {
                    const key = elementKeys.find(el => el.includes(item.type))
                    const control = elementsDictionary.get(key);    
                    return (

                        item.type
                    )
                })
            )
        }
        
    </Panel>
);
}

export default Result;