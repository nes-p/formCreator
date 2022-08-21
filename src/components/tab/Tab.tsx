import classNames from 'classnames';
import React, { FC } from 'react';
import { FormTabs } from '../../modules/tab-manager/TabManager';
import './tab.css';
export interface TabProps {
    id: string;
    value: FormTabs;
    activeTab: FormTabs;
    onClick: any;
}
const Tab: FC<TabProps> = ({id, onClick, value, activeTab}) => {
  const isActive = activeTab === value;
    return(
  <button 
    role="tab" 
    aria-selected={isActive}    
    id={id}     
    value={value}
    onClick={onClick}
    className={classNames(['tab', {'isActive': isActive}])}
    >
    {value}
  </button>
  );
};

export default Tab;