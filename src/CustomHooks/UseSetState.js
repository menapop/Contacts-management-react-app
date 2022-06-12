import { useReducer  } from "react"

const reducer =  (state = {},updatedstate={}) =>
{
    return {...state , ...updatedstate}
}

const SetSetState =  (initialState) =>{

    const [state,dispatch] = useReducer(reducer,initialState) ;

    const SetUpdateState = (updatedState) => dispatch(updatedState);

    return  [state,SetUpdateState]
}

export default SetSetState;