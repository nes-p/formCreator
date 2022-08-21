import React, { FC } from 'react';
import './tabPanel.css';

export interface TabPanelProps {
    children?: React.ReactNode[] | React.ReactNode;
    id: string;
    ariaLabelledby: string;
    isShow: boolean;    
}

const TabPanel: FC<TabPanelProps> = ({ children, isShow, id, ariaLabelledby }) => 
   { 
    return (
    isShow ? 
    <div role="tabpanel" id={id} aria-labelledby={ariaLabelledby} className='tabPanel'>
        {children}
    </div>
    :
    <></>
    )
}
;

export default TabPanel;
