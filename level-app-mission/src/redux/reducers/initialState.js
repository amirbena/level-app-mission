import { getInitialMissions } from '../../localStorageSaving/localStorageHandling';


export const initialMissionInput = {
    title: "",
    content: "",
    maxDays: ""
}

const initialState = {
    missions: getInitialMissions(),
    missionInput: initialMissionInput,
    popupSeen: false,
    sureDelete: false,
    filteredText: "",
    idsToDelete: []
}

export default initialState;