import * as types from '../actions/actionTypes';
const initialState = {
    count:1
};
export default function todoApp(state=initialState,action={}) {
    switch (action.type) {
        case types.COUNC_TYPE:
            return Object.assign({},state,{count:state.count + action.payload});
        default:
            return state;
    }

}