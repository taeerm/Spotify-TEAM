import React from 'react'

const Site = props => (
    <div>
        <a target="_blank" rel="noopener noreferrer" href={props.url}> 
            <img src={props.pic} alt=''/>
        </a>
        <p> {props.details} </p>
    </div>
)

export default Site