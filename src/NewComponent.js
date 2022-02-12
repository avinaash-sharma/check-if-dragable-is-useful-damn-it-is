import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const NewComponent = () => {
    
        // 1. Create the component
        function DataTabs({ data }) {
          return (
            <Tabs>
              <TabList>
                {data.map((tab, index) => (
                  <Tab key={index}>{tab.label}</Tab>
                ))}
              </TabList>
              <TabPanels>
                {data.map((tab, index) => (
                  <TabPanel p={4} key={index}>
                    {tab.content}
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          )
        }
      
        // 2. Create an array of data
        const tabData = [
          {
            label: 'Nigerian Jollof',
            content: 'Perhaps the greatest dish ever invented.',
          },
          {
            label: 'Pounded Yam & Egusi',
            content:
              'Perhaps the surest dish ever invented but fills the stomach more than rice.',
          },
        ]
      
        // 3. Pass the props and chill!
        return <DataTabs data={tabData} />
      
}

export default NewComponent