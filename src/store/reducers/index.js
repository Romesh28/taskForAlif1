import {USER} from '../actions/index'

const initialState={
    name:'',
    surname:'',
    birthDate:'',
    select:''
}

export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case USER:return reduceUSER(state,action)
        default:return state
    }
}

const reduceUSER=(state,action)=>{
    return {
        ...state,
        [action.payload.name]:action.payload.value
    }
}
