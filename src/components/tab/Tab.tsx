import React, { FC } from 'react';

export interface TabProps {
    id: string;
    label: string;
    tabIndex?: number;
    isSelected: boolean;
}

const Tab: FC<TabProps> = ({id, label, tabIndex, isSelected}) => (
    <button 
    role="tab" 
    aria-selected={isSelected} 
    // aria-controls="panel-1" 
    id={id} 
    tabIndex={tabIndex}
    >
    {label}
  </button>
);

export default Tab;