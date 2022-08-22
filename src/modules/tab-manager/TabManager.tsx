import React, { FC, useState } from 'react';
import Config from '../config/Congif';
import Result from '../result/Result';
import TabList from '../../components/tab-list/TabsList';
import TabPanel from '../../components/tab-panel/TabPanel';
import Tab from '../../components/tab/Tab';
import './tabManager.css';

export enum FormTabs {
    CONFIG = 'Config',
    RESULT = 'Result'
}

export type ITabHandler = (event: any, tabValue: FormTabs) => void;

 const TabManager: FC = () => {
    const [activeTab, setTab] = useState(FormTabs.CONFIG);
    const [isApplied, setApplied] = useState(false);
    const tabHandler = (e: any) => {
        setTab(e.target.value);
    };
    const applyHandler = () => {
        setApplied(true);
        setTab(FormTabs.RESULT);
    };
    const [configData, setCongifData] = useState('');
    const tabs = [{
        value: FormTabs.CONFIG
    },
    {
        value: FormTabs.RESULT 
    }

];
    return (
        <div className='tabManager'>
        <TabList  aria-label="FormTabs">
        {tabs.map(tab=>  {
               return <Tab                  
                 id={`${tab.value.toLowerCase()}-tab`}
                 activeTab= {activeTab}
                 value={tab.value}
                 onClick={tabHandler} 
                 key = {tab.value}               
                 />
        })}            
        </TabList>
        <TabPanel
             isShow = {activeTab === FormTabs.CONFIG}
             id='config-panel'
             ariaLabelledby={`${FormTabs.CONFIG.toLowerCase()}-tab`}
        >       
        <Config setCongifData={setCongifData} configData={configData} onApply={applyHandler}/>   
        </TabPanel>
        <TabPanel
          isShow = {activeTab === FormTabs.RESULT}
          id='results-panel'
          ariaLabelledby={`${FormTabs.RESULT.toLowerCase()}-tab`}
     >    
       <Result configData={configData} applied={isApplied}/>
       </TabPanel>
        </div>
    );
}

export default TabManager;