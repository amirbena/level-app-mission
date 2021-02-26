import { CHANGE_FILTERED_TEXT, CHANGE_TO_DELETE_ARRAY } from '../redux/actions-types'

export const changeFiltredText = text => {
    return {
        type: CHANGE_FILTERED_TEXT,
        payload: { text }
    }
}

export const handleDeleteArray = (checked, arrayToCheck) => {
    return {
        type: CHANGE_TO_DELETE_ARRAY,
        payload: { checked, array: arrayToCheck }
    }
}