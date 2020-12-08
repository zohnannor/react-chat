import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        cardCont: {
            marginTop: 30,
            marginBottom: 20,
            overflow: 'auto',
            paddingBottom: 10,

            height: '100%',
        },
        navBar: {
            flexGrow: 0,
        },
        toolBar: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    })
);

interface Props {
    title: string;
    children: JSX.Element;
}

const Layout: React.FC<Props> = ({ title, children }): JSX.Element => {
    const classes = useStyles();

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                width: '100%',
            }}
        >
            <AppBar position='static' className={classes.navBar}>
                <Toolbar className={classes.toolBar}>
                    <Typography variant='h6'>{title}</Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth='lg' className={classes.cardCont}>
                {children}
            </Container>
        </div>
    );
};

export default Layout;
