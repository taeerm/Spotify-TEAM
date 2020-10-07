import React from 'react'
import { about } from '../../content/Data.json';


const About = () => (
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
        { about }
    </div>
)

export default About