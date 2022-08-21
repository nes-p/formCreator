import React, { FC } from 'react';
import './tabList.css';

export interface TabsProps {
    children?: React.ReactNode[] | React.ReactNode;    
}

const TabList: FC<TabsProps> = ({ children}) => (
    <div role="tablist" className='tabList'>
       {children}
    </div>    
);

export default TabList;
