const a11yProps = (index) => (
    {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    }
)

export default a11yProps