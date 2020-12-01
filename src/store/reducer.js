import * as actionTypes from './actions';

const initialState = {
    city:"Oslo",
    current:null,
    daily:null,
    hourly:null,
    coordinates:null,
    timezone_offset:0
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.SET_TIMEZONE_OFFSET:{
            return {
                ...state,
                timezone_offset:action.timezone_offset
            }
        }
        case actionTypes.SET_CITY:{
            return {
                ...state,
                city:action.city
            }
        }
        case actionTypes.SET_CURRENT_DATA:{
            return {
                ...state,
                current:action.payload
            }
        }
        case actionTypes.SET_DAILY_DATA:{
            return {
                ...state,
                daily:action.payload
            }
        }
        case actionTypes.SET_HOURLY_DATA:{
            return {
                ...state,
                hourly:action.payload
            }
        }
        case actionTypes.SET_COORDINATES:{
            return {
                ...state,
                coordinates:action.payload
            }
        }
        default:{
            return state;
        }
    }
}

export default reducer;