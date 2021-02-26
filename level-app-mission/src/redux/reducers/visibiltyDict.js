import { SET_POPUP_SEEN, SURE_DELETE } from '../actions-types';

const dictionary = {
    [SET_POPUP_SEEN]: (state, action) => {
        const { popupSeen } = action.payload;
        return { ...state, popupSeen };
    },
    [SURE_DELETE]: (state, action) => {
        const { sureDelete } = action.payload;
        return { ...state, sureDelete };
    }
}

export default dictionary;