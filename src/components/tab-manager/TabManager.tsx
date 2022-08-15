import React, { FC, useState } from 'react';
import TabList from '../tab-list/TabsList';
import TabPanel from '../tab-panel/TabPanel';
import Tab from '../tab/Tab';

export enum FormTabs {
    Config,
    Result
}

export type ITabHandler = (event: React.ChangeEvent<{}>, tabValue: FormTabs) => void;

 const TabManager: FC = () => {
    const [tab, setTab] = useState(FormTabs.Config);
    const tabHandler: ITabHandler = (event, tabValue) => {
        setTab(tabValue);
    };
    return (
        <>
        <TabList onChange={tabHandler} aria-label="FormTabs">
            <Tab 
                label={FormTabs[FormTabs.Config]} 
                id='config-tab'
                isSelected={tab === FormTabs.Config}/>
            <Tab label={FormTabs[FormTabs.Result]}
                 id='results-tab'  
                 isSelected={tab === FormTabs.Result}
                 />
        </TabList>
        <TabPanel
             isShow = {tab === FormTabs.Config}
             id='config-panel'
             ariaLabelledby='config-tab'
        >        
        </TabPanel>
        <TabPanel
          isShow = {tab === FormTabs.Result}
          id='results-panel'
          ariaLabelledby='results-tab'
     >    
     </TabPanel>
                    </>
    );
}

export default TabManager;