import React, { FC, useState } from 'react';
import Config from '../../modules/config/Congif';
import Result from '../../modules/result/Result';
import TabList from '../tab-list/TabsList';
import TabPanel from '../tab-panel/TabPanel';
import Tab from '../tab/Tab';

export enum FormTabs {
    CONFIG = 'Config',
    RESULT = 'Result'
}

export type ITabHandler = (event: any, tabValue: FormTabs) => void;

 const TabManager: FC = () => {
    const [activeTab, setTab] = useState(FormTabs.CONFIG);
    const tabHandler = (e: any) => {
        setTab(e.target.value);
    };
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
          <Config/>
        </TabPanel>
        <TabPanel
          isShow = {activeTab === FormTabs.RESULT}
          id='results-panel'
          ariaLabelledby={`${FormTabs.RESULT.toLowerCase()}-tab`}
     >    
       <Result/>
     </TabPanel>
                    </>
    );
}

export default TabManager;