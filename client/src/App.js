import React from 'react';
import ChatWindow from './components/ChatWindow';
import './App.css';

const App = () => {
    return (
        <div className='container'>
            <ChatWindow name={'Anonymous User'} />
        </div>
    );
};

export default App;
