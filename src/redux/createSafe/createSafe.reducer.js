
const INITIAL_STATE = {
    safes:[],
};


const createSafeReducer =  (state = INITIAL_STATE,action) =>{
    switch(action.type) {
       
        case "SET_CREATE_SAFE":
            return{
                ...state,
                safes: [ ...state.safes,action.payload],
            };
        case "DELETE_ITEM":
            return{
                ...state,
                safes:state.safes.filter((safes,index) => index !== action.payload)
            }
        case "EDIT_ITEM":
            let newSafes = state.safes.filter((safe,index) => index!==action.payload.index)
            newSafes = [...newSafes, action.payload.safeDetails]
            return{
                ...state,
                safes:newSafes
            }
            default:
                return state;
    }
};

export default createSafeReducer;