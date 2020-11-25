import React from 'react';

const ChatMessage = ({ name, date, text }) => {
    return (
        <li className='collection-item'>
            {/* <span className='title avatar'> */}
            {/* <img src='images/yuna.jpg' alt='' className='circle' /> */}
            <span className='title'>
                <b>{name}</b>&nbsp;
                <small>{date}</small>
            </span>
            <p>{text}</p>
        </li>
    );
};

export default ChatMessage;
