import * as types from './actionTypes';
export const add = (num)=>{
    console.log('actions!!!!');
    return (dispatch, getState) => {
        dispatch({
            type: types.COUNC_TYPE,
            payload: num
        });
    }
}