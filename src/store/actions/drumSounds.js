import * as actionTypes from './actionTypes';

export const playSound=(id)=>{
    return{
        type: actionTypes.PLAY_SOUND,
        id: id
    }
}