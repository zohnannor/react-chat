import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { io } from 'socket.io-client';
import { ENDPOINT } from 'src/constants';
import Chat from './Chat';
import Layout from './Layout';

const App: React.FC<{}> = () => {
    const socket = io(ENDPOINT, {
        transports: ['websocket'],
    });

    return (
        <>
            <CssBaseline />
            <Layout title={'Chat'}>
                <Chat socket={socket} />
            </Layout>
        </>
    );
};

export default App;
