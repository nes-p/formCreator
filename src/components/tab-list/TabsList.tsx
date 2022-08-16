import React, { FC } from 'react';

export interface TabsProps {
    children?: React.ReactNode[] | React.ReactNode;    
}

const TabList: FC<TabsProps> = ({ children}) => (
    <div role="tablist">
       {children}
    </div>    
);

export default TabList;
