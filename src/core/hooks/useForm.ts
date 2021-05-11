import { useState } from 'react';

export const useForm = (callback: any) => {
    const [inputs, setInputs] = useState({ firstName: '', lastName: '', email: '', password1: '', password2: '' });

    const handleSubmit = (event: any) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    }

    const handleInputChange = (event: any) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };

}