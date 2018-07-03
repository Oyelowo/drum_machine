import * as actionTypes from './actionTypes';

export const playSound = (audioId, volume, drumName) => {
    return {
        type: actionTypes.PLAY_SOUND,
        audioId: audioId,
        audioVolume: volume,
        drumName
    }
}
