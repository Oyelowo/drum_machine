import * as actionTypes from './actionTypes';

export const playSound = (audioId, audioVolume, drumName) => {
    return {
        type: actionTypes.PLAY_SOUND,
        audioId,
        audioVolume,
        drumName
    }
}
