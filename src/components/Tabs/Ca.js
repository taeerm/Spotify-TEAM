import React from 'react'
import { ca } from '../../content/Data.json';

const Ca = () => (
    <div 
        style={{ 
            height: "700px", 
            width: "70%", 
            textAlign: "center", 
            fontSize: "x-large",
            margin: "4em auto auto",
            backgroundColor: "#e1bee7",
            padding: "2rem",
            borderRadius: "35px"
        }}
    >
        { ca }
    </div>
)

export default Ca