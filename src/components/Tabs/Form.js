import React from 'react'
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import emailjs from 'emailjs-com'

class Form extends React.Component { 
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phone: "",
            msg: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        const { name, email, phone, msg } = this.state
        
        event.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.send(
            'gmail', 
            'template_8jabw9l', 
            {name: name, email: email, phone: phone, msg: msg}, 
            'user_IerJk5ovroLEwNDq92Grq')
        .then((response) => {
            console.log('success', response.status)
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        })
    }

    render() {
        const { name, email, phone, msg } = this.state

        return (
            <div style={{
                backgroundColor: "white", 
                width: "50%", 
                borderRadius: "35px", 
                margin: "auto"}}
            >
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}              
                >
                    <TextValidator
                        label="Name"
                        onChange={this.handleChange}
                        name="name"
                        value={name}
                        validators={['required', 'matchRegexp:^[A-Za-z]+$']}
                        errorMessages={['this field is required', 'name can\'t contain numbers']}
                    />
                    <TextValidator
                        label="Email"
                        onChange={this.handleChange}
                        name="email"
                        value={email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <TextValidator
                        label="Phone"
                        onChange={this.handleChange}
                        name="phone"
                        value={phone}
                        validators={['required', 'matchRegexp:^[0-9]+$']}
                        errorMessages={['this field is required', 'phone is not valid']}
                    />
                    <br />
                    <textarea
                        onChange={this.handleChange}
                        name="msg"
                        value={msg}
                        placeholder="Feel Free to share"
                        rows="6"
                    />
                    <br /><br />
                    <Button type="submit" variant="contained">שלח</Button>
                </ValidatorForm>
                <br />
            </div>
        )
    }
}

export default Form