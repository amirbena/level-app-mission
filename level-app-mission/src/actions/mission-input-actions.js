
import { CHANGE_FORM, CLEAR_MISSION_INPUT } from '../redux/actions-types';


export const changeInput = target => {
    return {
        type: CHANGE_FORM,
        payload: { target }
    }
}


export const clearInputs = () => {
    return {
        type: CLEAR_MISSION_INPUT
    }
}



