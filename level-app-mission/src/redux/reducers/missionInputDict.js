import { CHANGE_FORM, CLEAR_MISSION_INPUT } from '../actions-types';
import { initialMissionInput } from './initialState';

const dictionary = {
    [CHANGE_FORM]: (state, action) => {
        const { target: { id, value } } = action.payload;
        const missionInput = {
            ...state.missionInput,
            [id]: value
        };
        return {
            ...state,
            missionInput
        }
    },
    [CLEAR_MISSION_INPUT]: (state, action) => {
        return {
            ...state,
            missionInput: initialMissionInput,
            popupSeen: false
        }
    }
}

export default dictionary;