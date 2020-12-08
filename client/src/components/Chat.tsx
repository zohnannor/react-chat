import {
    Card,
    Container,
    createStyles,
    IconButton,
    makeStyles,
    TextField,
    Theme,
    Tooltip,
    Zoom,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { Field, FieldProps, Form, Formik } from 'formik';
import moment from 'moment';
import React, { useRef, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import MessagesList, { MessageType } from './MessagesList';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        textarea: {
            flexGrow: 0,
        },
        form: {
            display: 'flex',
        },
        card: {
            height: '100%',
            padding: '0 20px 20px 20px',
            display: 'flex',
            flexFlow: 'column',
        },
        btn: {
            alignSelf: 'flex-end',
        },
    })
);

interface Props {
    socket: Socket;
}

const Chat: React.FC<Props> = ({ socket }): JSX.Element => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const inputRef = useRef<HTMLTextAreaElement>();
    const classes = useStyles();

    useEffect(() => {
        socket.on('new message', (message: MessageType) => {
            setMessages(prevMessages => [...prevMessages, message]);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const focusInput = () => inputRef.current?.focus();

    const sendMessage = (text: string) => {
        socket.emit('send new message', {
            name: 'Anonymous User',
            text,
            date: moment().format('HH:mm:ss'),
        });
    };

    return (
        <Card className={classes.card}>
            <MessagesList messages={messages} />
            <Formik
                initialValues={{
                    textareaValue: '',
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (values.textareaValue) {
                        sendMessage(values.textareaValue);
                        resetForm({
                            values: {
                                textareaValue: '',
                            },
                        });
                        focusInput();
                        setSubmitting(true);
                    }
                }}
            >
                {({ resetForm }) => (
                    <Form>
                        <Container className={classes.form}>
                            <Field name='textareaValue'>
                                {({ field }: FieldProps<string>) => (
                                    <TextField
                                        {...field}
                                        className={classes.textarea}
                                        fullWidth
                                        autoFocus
                                        label='Your message...'
                                        multiline
                                        variant='outlined'
                                        inputRef={inputRef}
                                        onKeyDown={e => {
                                            if (e.key === 'Enter' && !e.ctrlKey && !e.shiftKey) {
                                                e.preventDefault();
                                                const target = e.target as HTMLTextAreaElement;
                                                if (target.value) {
                                                    sendMessage(target.value);
                                                    resetForm({
                                                        values: {
                                                            textareaValue: '',
                                                        },
                                                    });
                                                }
                                            }
                                        }}
                                    />
                                )}
                            </Field>

                            <Tooltip title='Send' placement='right' TransitionComponent={Zoom}>
                                <IconButton
                                    aria-label='delete'
                                    color='primary'
                                    type='submit'
                                    className={classes.btn}
                                >
                                    <SendIcon />
                                </IconButton>
                            </Tooltip>
                        </Container>
                    </Form>
                )}
            </Formik>
        </Card>
    );
};

export default Chat;
