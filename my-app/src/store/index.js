import { SET_DATA } from './actionType'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

const initialState = {
    dataSkill: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === SET_DATA) {
        return { ...state, dataSkill: action.payload }
    }
    return state
}

const middleware = applyMiddleware(ReduxThunk)

const store = createStore(reducer, middleware)

export default store
