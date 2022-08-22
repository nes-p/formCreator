import { FC } from "react";
import Button from "../../components/button/Button";
import Panel from "../../components/panel/Panel";
import { configPlaceholder } from "../../lib/utils/constants";
import './../config/config.css';


export interface ConfigProps {
    configData: string,
    setCongifData: (data: string) => void;
    onApply: () => void;
}

const Config: FC<ConfigProps> = ({configData, setCongifData, onApply}) => {
const handleChange = (e: any) => {
    setCongifData(e.target.value)
}
return (
    <Panel className="config">        
            <textarea 
            onChange={handleChange}
            value={configData}
            placeholder={configPlaceholder}
            cols={1}            
            className='config-textarea' 
            />
        <Button btnLabel="Apply" onClick={onApply} className='config-btn'/>
    </Panel>
);
}

export default Config;