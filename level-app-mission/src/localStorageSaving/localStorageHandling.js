

const MISSION_LOCAL_STORAGE = "missions";


export const writeMissionsLocalStorage = missions => {
    if (!missions.length) return localStorage.removeItem(MISSION_LOCAL_STORAGE);
    const stringifiedMissions = JSON.stringify(missions);
    localStorage.setItem(MISSION_LOCAL_STORAGE, stringifiedMissions);
}

export const getInitialMissions = () => {
    const stringifiedArray = localStorage.getItem(MISSION_LOCAL_STORAGE);
    if (!stringifiedArray) {
        return [];
    }
    return JSON.parse(stringifiedArray);
}



