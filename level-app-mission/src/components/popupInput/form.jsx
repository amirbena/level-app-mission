import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { TextField, Button } from '@material-ui/core'
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import * as InputActions from '../../actions/mission-input-actions';
import { addMission } from '../../actions/missions-actions'

const useStyles = makeStyles((theme) => ({
    form: {
        direction: "rtl"
    },
    textField: {
        marginBottom: "15%"
    },
    button: {
        position: "relative",
        right: "20%"
    }
}))
const validationSchema = yup.object({
    title: yup
        .string("הכנס כותרת משימה")
        .required("כותרת לא הוכנסה")
        .min(3, "לפחות 3 תווים")
        .max(15, "שגיאה! עברת מכסת תווים 15")
    ,
    content: yup
        .string("הכנס תוכן משימה")
        .required("תוכן לא הוכנס")
    ,
    maxDays: yup
        .number("הכנס מספר ימים לביצוע")
        .required("מספר ימים לא הוכנס")
        .min(1, "לפחות יום אחד לביצוע")
        .max(100, "לא יאוחר מ100 יום לביצוע")
})

const Form = () => {
    const {
        title,
        content,
        maxDays
    } = useSelector(state => state.missionInput)
    const classes = useStyles();
    const dispatch = useDispatch();
    const theme = createMuiTheme({
        direction: 'rtl'
    });

    const formik = useFormik({
        initialValues: { title, content, maxDays },
        validationSchema,
        onSubmit: (values) => {
            const startDate = new Date();
            const id = uuid();
            const checked = false;
            const mission = { ...values, id, startDate, checked }
            console.log(mission);
            dispatch(addMission(mission));
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={formik.handleSubmit} className={classes.form} >
                <TextField
                    id="title"
                    name="title"
                    placeholder="כותרת משימה"
                    className={classes.textField}
                    value={formik.values.title}
                    onChange={e => {
                        formik.handleChange(e);
                        dispatch(InputActions.changeInput(e.target))
                    }}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <br />
                <TextField
                    id="content"
                    name="content"
                    placeholder="תוכן"
                    rows={5}
                    multiline
                    fullWidth
                    className={classes.textField}
                    value={formik.values.content}
                    onChange={e => {
                        formik.handleChange(e);
                        dispatch(InputActions.changeInput(e.target))
                    }}
                    error={formik.touched.content && Boolean(formik.errors.content)}
                    helperText={formik.touched.content && formik.errors.content}
                />
                <br />
                <TextField
                    id="maxDays"
                    name="maxDays"
                    placeholder="מספר ימים מקסימלי"
                    type="number"
                    className={classes.textField}
                    value={formik.values.maxDays}
                    onChange={e => {
                        formik.handleChange(e);
                        dispatch(InputActions.changeInput(e.target))
                    }}
                    error={formik.touched.maxDays && Boolean(formik.errors.maxDays)}
                    helperText={formik.touched.maxDays && formik.errors.maxDays}
                />
                <br />
                <Button type="submit" color="primary" className={classes.button} variant="contained">הוסף משימה</Button>
            </form>
        </ThemeProvider>

    );
}

export default Form;