import React from 'react'
import { contact } from '../../content/Data.json'
import Form from './Form'

const Contact = () => (
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
        { contact }
        <br /><br /><br />
        <Form/>
    </div>
)

export default Contact