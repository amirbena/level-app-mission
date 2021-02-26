import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles'

import { Typography, TableRow, TableCell, IconButton, Checkbox, Box, Collapse } from '@material-ui/core'
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import { changeAllMissions } from '../../actions/missions-actions';
import { handleDeleteArray } from '../../actions/mission-table-actions';


const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});
const Row = ({ row }) => {
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();
    const dispatch = useDispatch();
    const missions = useSelector(state => state.missions);
    const setCommand = () => setOpen(!open);

    const calculateDate = () => {
        const date = new Date(row.startDate);
        date.setDate(date.getDate() + row.maxDays);
        return date.toLocaleDateString();

    }

    const changeChecked = e => {
        const { id, checked } = e.target;
        const newMissions = [...missions];
        const index = newMissions.findIndex(mission => mission.id === id);
        if (index !== -1) {
            newMissions[index].checked = checked;
        }
        dispatch(changeAllMissions(newMissions));
        dispatch(handleDeleteArray(checked, [id]));
    }
    return (
        <>
            <TableRow className={classes.root}>
                <TableCell>
                    <Checkbox checked={row.checked} id={row.id} onChange={changeChecked} />
                </TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={setCommand}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{calculateDate()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center" style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" component="div">
                        <Typography variant="h6" gutterBottom component="div">
                            תוכן
                     </Typography>
                        <Box>
                            {row.content}
                        </Box>
                    </Collapse>

                </TableCell>
            </TableRow>
        </>
    )
}

export default Row;