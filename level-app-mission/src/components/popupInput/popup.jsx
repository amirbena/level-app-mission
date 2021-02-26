import { useSelector, useDispatch } from "react-redux";
import { clearInputs } from "../../actions/mission-input-actions";
import { makeStyles } from '@material-ui/styles';
import { Dialog, DialogTitle, DialogContent,DialogActions, Button } from '@material-ui/core'
import Form from './form';

const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    cancelButton:{
        background: "linear-gradient(45deg, red  30%, red 90%)",
        color: "white"
    }
}))

const PoupInput = () => {
     
    const classes= useStyles();

    const seen = useSelector(state => state.popupSeen);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(clearInputs());
    }
    return (
        <Dialog open={seen}>
            <DialogTitle color="red" className={classes.title}>הכנס משימה חדשה</DialogTitle>
            <DialogContent>
                <Form />
            </DialogContent>
            <DialogActions>
                <Button className={classes.cancelButton}  onClick={handleClose}>בטל</Button>
            </DialogActions>
        </Dialog>
    );
}

export default PoupInput;