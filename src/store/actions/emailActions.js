import { emailService } from "../../services/email/email.service"
export function loadEmails() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().emailModule
            const emails = await emailService.query(filterBy)
            dispatch({ type: 'LOAD_MEALS', emails })
        } catch (err) {
            console.error('err', err);
        }
    }
}

export function addEmail(email) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'ADD_MEAL', email })
            const newEmail = await emailService.save(email)
            return newEmail
        } catch (err) {
            console.error('err', err);
        }
    }
}
export function updateEmail(email) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'UPDATE_MEAL', email })
            const newEmail = await emailService.save(email)
            return newEmail
        } catch (err) {
            console.error('err', err);
        }
    }
}
export function removeEmail(emailId) {
    return async (dispatch) => {
        try {
            const emails = await emailService.remove(emailId)
            dispatch({ type: 'REMOVE_MEAL', emailId })
            return emails
        } catch (err) {
            console.error('err', err);
        }
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}