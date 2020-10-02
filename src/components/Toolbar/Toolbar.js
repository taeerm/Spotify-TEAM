import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import useStyles from './ToolbarStyle'
import a11yProps from './ToolbarProps'
import TabPanel from './TabPanel'

import Sites from '../Dashboards/Sites'
import About from '../Tabs/About'
import Contact from '../Tabs/Contact'
import Examples from '../Tabs/Examples'

function Toolbar() {
  const classes = useStyles()
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#6d1b7b'}}>
        <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="wrapped label tabs example"
            TabIndicatorProps={{style: {background:'white'}}}
            centered
            style={{direction: "rtl"}}
        >
          <Tab
            value="one"
            label="בית"
            {...a11yProps('one')}
          />
          <Tab 
            value="two" 
            label="על הצוות" 
            {...a11yProps('two')} 
          />
          <Tab 
            value="three" 
            label="צור קשר" 
            {...a11yProps('three')} 
          />
          <Tab 
            value="four" 
            label="איך לפתוח תקלות" 
            {...a11yProps('four')} 
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        {Sites}
      </TabPanel>
      <TabPanel value={value} index="two">
        {About}
      </TabPanel>
      <TabPanel value={value} index="three">
        {Contact}
      </TabPanel>
      <TabPanel value={value} index="four">
        {Examples}
      </TabPanel>
    </div>
  )
}

export default Toolbar