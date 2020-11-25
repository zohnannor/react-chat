import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import 'materialize-css';
import ChatInput from './ChatInput';
import Messages from './Messages';
import io from 'socket.io-client';

const ENDPOINT = 'https://zohnannor-react-chat.herokuapp.com/';

const ChatWindow = ({ name }) => {
    const [messages, setMessages] = useState([]);

    const socket = io(ENDPOINT, {
        transports: ['websocket'],
    });

    useEffect(() => {
        socket.on('new message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    const sendMessage = (text) => {
        socket.emit('send new message', {
            from_name: name,
            date: moment(),
            text,
        });
    };

    return (
        <div className='chat-window'>
            <Messages messages={messages} />
            <ChatInput sendMessage={sendMessage} />
        </div>
    );
};

export default ChatWindow;
