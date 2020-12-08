import React from 'react';
import { makeStyles, Theme, createStyles, List } from '@material-ui/core';
import Message from './Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        list: {
            overflowY: 'auto',
            flexGrow: 1,
            padding: '0 20px',
        },
    })
);

export interface MessageType {
    name: string;
    date: string;
    text: string;
}

interface Props {
    messages: MessageType[];
}

const MessagesList: React.FC<Props> = ({ messages }) => {
    const classes = useStyles();

    return (
        <ScrollToBottom className={classes.list}>
            <List>
                {messages.map((msg, i) => (
                    <Message key={i} userName={msg.name} messageText={msg.text} date={msg.date} />
                ))}
            </List>
        </ScrollToBottom>
    );
};

export default MessagesList;
