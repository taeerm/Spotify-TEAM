import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import HomeIcon from '@material-ui/icons/Home'

import useStyles from './ToolbarStyle'
import a11yProps from './ToolbarProps'
import TabPanel from './TabPanel'
import Footer from './Footer'

import Site from '../Tabs/Dashboards/Site'
import About from '../Tabs/About'
import Contact from '../Tabs/Contact'
import Ca from '../Tabs/Ca'

function Toolbar() {
  const classes = useStyles()
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#6d1b7b' }}>
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
            icon={ <HomeIcon fontSize="large" /> }
            {...a11yProps('one')}
          />
          <Tab 
            value="two" 
            label="על הצוות" 
            {...a11yProps('two')} 
            style={{fontSize: "large"}}
          />
          <Tab 
            value="three" 
            label="צור קשר" 
            {...a11yProps('three')} 
            style={{fontSize: "large"}}
          />
          <Tab 
            value="four" 
            label="איך לפתוח תקלות" 
            {...a11yProps('four')} 
            style={{fontSize: "large"}}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        {Site}
      </TabPanel>
      <TabPanel value={value} index="two">
        {About}
      </TabPanel>
      <TabPanel value={value} index="three">
        {Contact}
      </TabPanel>
      <TabPanel value={value} index="four">
        {Ca}
      </TabPanel>
      <Footer />
    </div>
  )
}

export default Toolbar