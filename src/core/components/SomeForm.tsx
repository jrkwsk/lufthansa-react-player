import React from 'react'
import styled from 'styled-components'

const FormStyle = styled.label`
color: red;
background-color: black;
border: 1px solid;
padding: 20px;
& button {
    color: lightgreen;
}
& input {
    color: blue;
}
`

interface Props {

}

export const SomeForm = (props: Props) => {
    return (
        <div>
            <FormStyle>
                <form className="form-inline">
                    <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"></input>

                    <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"></input>
                    </div>

                    <div className="form-check mb-2 mr-sm-2">
                        <input className="form-check-input" type="checkbox" id="inlineFormCheck"></input>
                        <label className="form-check-label" htmlFor="inlineFormCheck">
                            Remember me
            </label>
                    </div>

                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </FormStyle>
        </div>

    )
}
