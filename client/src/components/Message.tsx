import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    Divider,
    createStyles,
    makeStyles,
    Theme,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        inline: {
            display: 'inline',
        },
        item: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    })
);

interface Props {
    userName: string;
    messageText: string;
    userAvatar?: string;
    date: string;
}

const Message: React.FC<Props> = ({ userName, messageText, userAvatar, date }) => {
    const classes = useStyles();

    return (
        <>
            <ListItem className={classes.item}>
                <ListItemAvatar>
                    <Avatar alt={userName} src={userAvatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <ListItemText>
                            {userName} <Typography variant='caption'>{date}</Typography>
                        </ListItemText>
                    }
                    secondary={
                        <Typography
                            component='span'
                            variant='body2'
                            className={classes.inline}
                            color='textPrimary'
                        >
                            {messageText}
                        </Typography>
                    }
                />
            </ListItem>
            <Divider variant='inset' component='li' />
        </>
    );
};

export default Message;
