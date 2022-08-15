import React, { FC } from 'react';

export interface TabsProps {
    children?: React.ReactNode[] | React.ReactNode;
    onChange?: ((event: React.ChangeEvent<{}>, value: any) => void) | undefined;
    value?: any;
}

const TabList: FC<TabsProps> = ({ children}) => (
    <div role="tablist">
        {children}
    </div>    
);

export default TabList;
