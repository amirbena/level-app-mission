import { ADD_MISSION, DELETE_NUM_MISSIONS, CHANGE_ALL_MISSIONS, CHANGE_SPECIFIC_MISSIONS } from '../actions-types';
import { writeMissionsLocalStorage } from '../../localStorageSaving/localStorageHandling'
import { initialMissionInput } from './initialState'

const dictionary = {
    [ADD_MISSION]: (state, action) => {

        const { mission } = action.payload;
        const missions = [...state.missions, mission];
        writeMissionsLocalStorage(missions);
        return {
            ...state,
            missions,
            missionInput: initialMissionInput,
            popupSeen: false
        }
    },
    [CHANGE_ALL_MISSIONS]: (state, action) => {
        const { missions } = action.payload;
        if (!missions.length) return state;
        writeMissionsLocalStorage(missions);
        return {
            ...state,
            missions
        }
    },
    [CHANGE_SPECIFIC_MISSIONS]: (state, action) => {
        const { missions } = action.payload;
        if (!missions.length) return state;
        const newMissions = state.missions.map(mission => {
            const item = missions.find(subMission => subMission.id === mission.id);
            return item ? item : mission;
        })
        writeMissionsLocalStorage(newMissions);
        return {
            ...state,
            missions: newMissions
        }
    },
    [DELETE_NUM_MISSIONS]: (state, action) => {
        const { missionsToDelete } = action.payload;
        if (!missionsToDelete.length) {
            return {
                ...state,
                sureDelete: false,
                filteredText: "",
            }
        }
        let filtered = state.missions;
        if (missionsToDelete.length === filtered.length) {
            filtered = [];
            writeMissionsLocalStorage([]);
        }
        else {
            for (let id of missionsToDelete) {
                filtered = filtered.filter(mission => mission.id !== id);
            }
        }
        return {
            ...state,
            missions: [...filtered],
            sureDelete: false,
            filteredText: "",
            idsToDelete: []
        }
    }
}

export default dictionary;