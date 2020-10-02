import React from 'react'

import AllDash from './Dashboards'
import Site from './site'

function Sites () {
    const dashComponents = AllDash.map(s => 
        <Site key={s.id} pic={s.pic} details={s.details} url={s.url} />)
    
    return (
        <div>
            { dashComponents }
        </div>
    )
}

export default Sites