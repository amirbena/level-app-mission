
import { ADD_MISSION, DELETE_NUM_MISSIONS, CHANGE_ALL_MISSIONS, CHANGE_SPECIFIC_MISSIONS } from '../redux/actions-types';


export const addMission = mission => {
    return {
        type: ADD_MISSION,
        payload: { mission }
    }
}

export const changeAllMissions = missions => {
    return {
        type: CHANGE_ALL_MISSIONS,
        payload: { missions }
    }
}

export const changeSpecificMissions = missions => {
    return {
        type: CHANGE_SPECIFIC_MISSIONS,
        payload: { missions }
    }
}

export const deleteNumMissions = missionsToDelete => {
    return {
        type: DELETE_NUM_MISSIONS,
        payload: { missionsToDelete }
    }
}





