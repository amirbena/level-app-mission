import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';
import { deleteNumMissions } from '../actions/missions-actions';

const useStyles = makeStyles({
    confirmButton: {
        background: "linear-gradient(45deg, blue  30%, blue 90%)",
        color: "white",
        marginLeft: "20px"
    },
    cancelButton: {
        background: "linear-gradient(45deg, red  30%, red 90%)",
        color: "white",
        marginLeft: "20px"
    }
})

const SureDelete = () => {
    const sureDelete = useSelector(state => state.sureDelete);
    const idsToDelete = useSelector(state => state.idsToDelete);

    const dispatch = useDispatch();

    const onCancel = () => dispatch(deleteNumMissions([]))

    const onSubmit = () => {
        dispatch(deleteNumMissions(idsToDelete))

    }

    const styles = useStyles();
    return (
        <div dir="rtl">
            <Dialog
                open={sureDelete}
            >
                <DialogTitle >
                    האם אתה בטוח שאתה רוצה למחוק?
                </DialogTitle>
                <DialogActions>
                    <Button className={styles.confirmButton} onClick={onSubmit}>
                        מחק
                </Button>
                    <Button className={styles.cancelButton} onClick={onCancel} focusRipple>
                        בטל
                </Button>
                </DialogActions>


            </Dialog>
        </div>

    );
}

export default SureDelete;

