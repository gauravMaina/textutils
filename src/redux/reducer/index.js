import { SET_TEXT, SHOW_ALERT, TOGGLE_MODE } from "../actions"

const initialState = {
    mode: 'light',
    alert: null,
    text:"",
}

function reducer(state = initialState, { type, payload }) {
    // action type
    switch (type) {
        case TOGGLE_MODE:
            let newState
            if (state.mode === "light") {
                document.body.style.background = "#1c3a83";
                document.title = "Text Utils - Dark Mode";
                newState = { ...state, mode: 'dark', alert: {message:'Enable Dark Mode',type:'success'} }
            } else {
                document.body.style.background = "white";
                document.title = "Text Utils - light Mode";
                newState = { ...state, mode: 'light' }
            }
            return newState
        case SHOW_ALERT:
            if(payload){
                return {...state,alert:{message:payload.message,type:payload.type}}
            }else{
                return {...state,alert:payload}
            }
        case SET_TEXT:
            return {...state,text:payload.text}    
        default:
            return state
    }
}
export default reducer
