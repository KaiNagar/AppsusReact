const INITIAL_STATE = {
    emails: null,
    filterBy: null
}


export function emailReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOAD_MEALS":
            return {
                ...state,
                emails: action.emails
            }
        case "ADD_MEAL":
            return {
                ...state,
                emails: [action.email, ...state.emails]
            }
        case "UPDATE_MEAL":
            return {
                ...state,
                emails: state.contacts.map(m => m._id === action.email._id ? action.email : m)
            }
        case "REMOVE_MEAL":
            return {
                ...state,
                emails: state.emails.filter(m => m._id !== action.emailId)
            }
        case "SET_FILTER_BY":
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }

        default:
            return state
    }
}