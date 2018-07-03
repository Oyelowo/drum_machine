import * as actionTypes from './actionTypes';

export const playSound = (id, volume) => {
    return {
        type: actionTypes.PLAY_SOUND,
        id: id,
        audioVolume: volume
    }
}

