import * as actionTypes from './actionTypes';

export const playSound = (audioId, volume) => {
    return {
        type: actionTypes.PLAY_SOUND,
        audioId: audioId,
        audioVolume: volume
    }
}

