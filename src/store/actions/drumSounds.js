import * as actionTypes from './actionTypes';

export const playSound = (id, audioVolume) => {
    return {
        type: actionTypes.PLAY_SOUND,
        id: id,
        audioVolume: audioVolume
    }
}

