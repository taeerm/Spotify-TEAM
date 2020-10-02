import React from 'react'

import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import './TabPanel.css'

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function TabPanel(props) {
    const { children, value, index, ...other } = props
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && (   
          <Box p={3} >
            <div className="card-class">
                {children}
            </ div>
          </Box>
        )}
      </div>
    )
}

export default TabPanel