import React from 'react'
import styled from 'styled-components'
import { useForm } from '../../core/hooks/useForm'

const FormStyle = styled.form`
color: #000;
font-weight: bold;
background-color: #f0f0f0;
border: 1px solid #ccc;
padding: 20px;
& button {
    color: lightgreen;
}
& input {
    color: blue;
    margin: 5px;
}
& button {
    margin: 10px
}
`

interface Props {

}

export const SomeForm = (props: Props) => {

    const signup = () => {
        alert(`User Created!
               Name: ${inputs.firstName} ${inputs.lastName}
               Email: ${inputs.email}`);
    }
    const { inputs, handleInputChange, handleSubmit } = useForm(signup);


    return (
        <FormStyle>

            <form className="form-group" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
                <label>Email Address</label>
                <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
                <label>Password</label>
                <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1} />
                <label>Re-enter Password</label>
                <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2} />
                <div>
                    <button type="submit" className="btn btn-info">Submit</button>
                </div>
            </form>
            <div className="alert alert-danger" role="alert">
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </div>
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                You successfully read this important alert message.
            </div>
        </FormStyle>

    )
}
