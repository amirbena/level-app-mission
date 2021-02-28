import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles'
import { setPopupSeen } from "../actions/visibilty-actions"
import { AppBar, Toolbar, Typography, Slide, useScrollTrigger, Button, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    header: {
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto"
    },
    button: {
        position: "relative",
        left: "11%",
        background: 'linear-gradient(45deg, #FF5733 30%, #DC7633 90%)',
        color: "white"
    }
}))

const Navbar = () => {
    const HideOnScroll = ({ children, window }) => {
        const trigger = useScrollTrigger({ target: window ? window() : undefined });
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Grid container>
            <HideOnScroll>
                <AppBar>
                    <Toolbar>
                        <Grid item xs={10}>
                            <Typography variant="h4" className={classes.header}>מנהל משימות</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={() => dispatch(setPopupSeen(true))} color="primary" className={classes.button}>
                                הוספת משימה
                         </Button>
                        </Grid>

                    </Toolbar>

                </AppBar>
            </HideOnScroll>
        </Grid>
    );
}

export default Navbar;