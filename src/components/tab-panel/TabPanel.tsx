import React, { FC } from 'react';

export interface TabPanelProps {
    children?: React.ReactNode[] | React.ReactNode;
    id: string;
    ariaLabelledby: string;
    isShow: boolean;
    tabIndex?: number;
}

const TabPanel: FC<TabPanelProps> = ({ children, isShow, id, ariaLabelledby }) => (
    <div role="tabpanel" id={id} aria-labelledby={ariaLabelledby}>
        {isShow && children}
    </div>
);

export default TabPanel;
