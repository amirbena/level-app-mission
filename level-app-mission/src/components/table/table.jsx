import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/styles'
import { Search } from '@material-ui/icons'
import {
    Typography, Paper, TableContainer, Table, TableCell, TableHead, TableRow, TableBody, InputAdornment, Button, TextField
    , Grid
} from '@material-ui/core';

import Row from './tableRow';
import { changeFiltredText } from '../../actions/mission-table-actions';
import { setSureDelete } from '../../actions/visibilty-actions';

const useStyles = makeStyles(({
    startText: {
        marginTop: "10%",
        marginLeft: "5%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    input: {
        marginTop: "50px",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto"
    },
    button: {
        position: "relative",
        left: "15%",
        top: "120%",
        background: "linear-gradient(45deg, red  30%, red 90%)",
        color: "white",
    },
    table: {
        marginTop: "5%",
        marginLeft: "5%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    }

}))
const CustomTable = () => {
    const missions = useSelector(state => state.missions);
    const textboxInput = useSelector(state => state.filteredText);
    const idsToDelete = useSelector(state => state.idsToDelete);
    const dispatch = useDispatch();
    const [filteredMissions, setFilteredMissions] = useState(missions);
    const headers = ["מזהה", "כותרת", "תאריך סיום"];
    const onTextChange = e => {
        const { value } = e.target;
        dispatch(changeFiltredText(value));
        if (value === "") {
            setFilteredMissions(missions);
            return
        }


        const filteredMissions = missions.filter(mission => mission.content.startsWith(value));
        setFilteredMissions(filteredMissions);

    }


    useEffect(() => {
        setFilteredMissions(missions);
    }, [missions])

    const buttonOnClick = () => {
        dispatch(setSureDelete(true));
    }
    const classes = useStyles();
    const hasIdsToDelete = idsToDelete.length > 0;
    const renderTable = () => (
        <Grid container>
            {

                hasIdsToDelete &&
                <Grid item xs={3}>
                    <Button className={classes.button} onClick={buttonOnClick}>
                        מחק נבחרים
                 </Button>
                </Grid>
            }
            <Grid item xs={hasIdsToDelete ? 9 : 12}>
                <TextField
                    className={classes.startText}
                    variant="filled"
                    value={textboxInput}
                    onChange={onTextChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid container item xs={12}>
                {
                    filteredMissions.length > 0 ?

                        <TableContainer className={classes.table} component={Paper}>
                            <Table aria-label="collapsible table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell />
                                        {

                                            headers.map(header => (
                                                <TableCell align="right" key={header}>
                                                    {header}
                                                </TableCell>
                                            ))
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {

                                        filteredMissions.map(mission => (
                                            <Row key={mission.id} row={mission} />
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        <div className={classes.table}>
                            <Typography>לא נמצאו משימות בעלי תוכן זה</Typography>
                        </div>
                }
            </Grid>
        </Grid>
    )

    return (
        missions.length > 0 ?
            renderTable()
            :
            <Grid container xs={12}>
                <div className={classes.startText}>
                    <Typography>הכנס משימה ראשונה בלחיצה על כפתור</Typography>
                </div>
            </Grid>


    );
}

export default CustomTable;