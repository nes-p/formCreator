import React, { FC } from 'react';
import { FormTabs } from '../../modules/tab-manager/TabManager';
// import './tab.scss';
export interface TabProps {
    id: string;
    value: FormTabs;
    activeTab: FormTabs;
    onClick: any;
}
const Tab: FC<TabProps> = ({id, onClick, value, activeTab}) => {
  
    return(
  <button 
    role="tab" 
    aria-selected={activeTab === value}    
    id={id}     
    value={value}
    onClick={onClick}
    className='tab'
    >
    {value}
  </button>
  );
};

export default Tab;