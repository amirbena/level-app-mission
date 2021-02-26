
import { SURE_DELETE, SET_POPUP_SEEN } from '../redux/actions-types';



export const setPopupSeen = popupSeen => {
    return {
        type: SET_POPUP_SEEN,
        payload: { popupSeen }
    }
}

export const setSureDelete = sureDelete => {
    return {
        type: SURE_DELETE,
        payload: { sureDelete }
    }
}




