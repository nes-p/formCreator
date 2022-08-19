import React, { FC, useState } from 'react';
import Config from '../config/Congif';
import Result from '../result/Result';
import TabList from '../../components/tab-list/TabsList';
import TabPanel from '../../components/tab-panel/TabPanel';
import Tab from '../../components/tab/Tab';

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
    const [configData, setCongifData] = useState('test');
    const tabs = [{
        value: FormTabs.CONFIG
    },
    {
        value: FormTabs.RESULT 
    }

];
    return (
        <>
        <TabList  aria-label="FormTabs">
        {/* {tabs.map(tab=>  {
               return <Tab                  
                 id={`${tab.value.toLowerCase()}-tab`}
                 activeTab= {activeTab}
                 value={tab.value}
                 onClick={tabHandler}                
                 />
        })} */}
            <Tab                  
                id='config-tab'
                activeTab= {activeTab}
                value={FormTabs.CONFIG}
                onClick={tabHandler}                
                />
            <Tab 
                 id='results-tab' 
                 activeTab= {activeTab}                  
                 value={FormTabs.RESULT}
                 onClick={tabHandler}
                 />
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
                    </>
    );
}

export default TabManager;