import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');  
        } else {
            setName('');
            setEmail('');
            setMessage('');
            setErrorMessage('');
        }    
    };

    const handleInputExit = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputValue == "") {
            setErrorMessage(`Please input a ${inputType}`)
        }
    }

    return (
        <main className='d-flex justify-content-center align-items-center'>
            <form className="form d-flex flex-column m-3" id='form'>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        onMouseOut={handleInputExit}
                        type="text"
                        placeholder="Ada Lovelace"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onMouseOut={handleInputExit}
                        type="email"
                        placeholder="name@example.com"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea 
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onMouseOut={handleInputExit}
                        type="text"
                        placeholder='NOTE: Submitting this form will not actually send me a message at this time. Please contact me via my email, which can be found on my resume as well as my LinkedIn profile.'
                        className="form-control"
                        rows="3"
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            </form>
        </main>
    );
}
