import React from 'react';
import ChatMessage from './ChatMessage';
import moment from 'moment';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({ messages }) => {
    return (
        <ScrollToBottom className='chat-messages'>
            <ul className='collection'>
                {messages.length ? (
                    messages.map((msg, i) => {
                        return (
                            <ChatMessage
                                key={i}
                                name={msg.from_name}
                                date={moment(msg.date).format('hh:mm:ss')}
                                text={msg.text}
                            />
                        );
                    })
                ) : (
                    <li className='collection-item'>
                        <span className='title'>Напишите что-нибудь!</span>
                    </li>
                )}
            </ul>
        </ScrollToBottom>
    );
};

export default Messages;
