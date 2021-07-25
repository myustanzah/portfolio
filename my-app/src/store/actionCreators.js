import { SET_DATA } from './actionType'

export function fungsiData(input) {
    return {
        type: SET_DATA,
        payload: input
    }
}

export const fecthData = () => {
    return (dispatch, getState) => {
        fetch('https://yustanzahportfolio.herokuapp.com/',)
            .then(response => response.json())
            .then(result => dispatch(fungsiData(result)))
            .catch((err) => console.log(err))

    }
}