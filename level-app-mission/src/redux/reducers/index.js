
import allMissionsDictionary from './allMissionsDict';
import missionInputDictionary from './missionInputDict';
import visibiltyDictionary from './visibiltyDict';
import filterMissionDictonary from './filterMissonDict'
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    const bigDictionary = {
        ...allMissionsDictionary, ...missionInputDictionary,
        ...visibiltyDictionary, ...filterMissionDictonary
    }
    const updateStore = bigDictionary[action.type];
    if (!updateStore) return state;
    return updateStore(state, action);
}
export default reducer;