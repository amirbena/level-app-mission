import { CHANGE_FILTERED_TEXT, CHANGE_TO_DELETE_ARRAY } from '../actions-types'


const dictionary = {
    [CHANGE_FILTERED_TEXT]: (state, action) => {
        const { text: filteredText } = action.payload;
        return {
            ...state,
            filteredText
        }
    },
    [CHANGE_TO_DELETE_ARRAY]: (state, action) => {
        const { checked, array } = action.payload;
        let { idsToDelete } = state;
        if (checked) {
            idsToDelete = idsToDelete.concat(array)
        }
        else {
            for (let id of array) {
                idsToDelete = idsToDelete.filter(item => item !== id);
            }
        }
        return {
            ...state,
            idsToDelete
        }
    }
}
export default dictionary;