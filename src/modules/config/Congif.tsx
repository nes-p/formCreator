import { FC } from "react";
import Button from "../../components/button/Button";
import Panel from "../../components/panel/Panel";
import './../config/config.css';


export interface ConfigProps {
    configData: string,
    setCongifData: (data: string) => void;
}

const Config: FC<ConfigProps> = ({configData,setCongifData}) => {
const handleChange = (e: any) => {
    setCongifData(e.target.value)
}
return (
    <Panel className="config">
        
            <textarea 
            onChange={handleChange}
            >
            {/* <code> */}
                {configData}
            {/* </code> */}
            </textarea>
            
        <Button btnLabel="Apply"/>
    </Panel>
);
}

export default Config;