import React, { useRef, useState } from 'react';
import 'materialize-css';

const ChatInput = ({ sendMessage }) => {
    const [inputValue, setInputValue] = useState('');
    const fieldRef = useRef();

    const focus = () => {
        fieldRef.current.focus();
    };

    const handleKeyDown = (e) => {
        const value = e.target.value.trim().replace(/\n+/, '\n');
        if (e.key === 'Enter' && !e.shiftKey && value) {
            e.preventDefault();
            setInputValue('');
            sendMessage(value);
            focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target[0].value.trim().replace(/\n+/, '\n');
        if (value) {
            setInputValue('');
            sendMessage(value);
            focus();
        }
    };

    return (
        <div className='chat-input'>
            <div className='row'>
                <form className='col s12' onSubmit={handleSubmit}>
                    <div className='row valign-wrapper'>
                        <div className='input-field col s11'>
                            <textarea
                                ref={fieldRef}
                                autoFocus
                                value={inputValue}
                                id='textarea1'
                                className='materialize-textarea'
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder='Введите ваше сообщение...'
                            ></textarea>
                            <label htmlFor='textarea1'>Textarea</label>
                        </div>
                        <div className='col s1'>
                            <button
                                className='btn waves-effect'
                                style={{
                                    padding: '0 1rem',
                                }}
                                type='submit'
                            >
                                <i className='material-icons small'>send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatInput;
