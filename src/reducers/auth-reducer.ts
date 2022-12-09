// Core
import produce, {Draft} from 'immer'
// Type
import { AuthActionReducerType } from 'actions/auth-action'
import { TokenData, TwoFa, IUserType, RecoveryPassword } from 'types/auth-type'


const initialState = {
    auth: false,
    token: null as TokenData | null,
    two_fa: null as TwoFa | null,
    recovery_password: null as RecoveryPassword | null,
    valid_password: false,
    success_signup: null as string | null,
    form_errors: null as any,
    user: null as IUserType | null,
    // Loader
    load_form: false,
    load_logout: false,
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
        switch (action.type) {
            // Setter
            case "AUTH__SET__AUTH":
                draft.auth = action.payload.mode
                break
            case "AUTH__SET__TOKEN":
                draft.token = action.payload.data
                break
            case "AUTH__SET__VALID_PASSWORD":
                draft.valid_password = action.payload.mode
                break
            case "AUTH__SET__FORM_ERRORS":
                draft.form_errors = action.payload.data
                break
            case "AUTH__SET__SUCCESS_SIGNUP":
                draft.success_signup = action.payload.email
                break
            case "AUTH__SET__TWO_FA":
                draft.two_fa = action.payload.data
                break
            case "AUTH__SET__USER":
                draft.user = action.payload.data
                break
            case "AUTH__SET__RECOVERY_PASSWORD":
                draft.recovery_password = action.payload.data
                break
            // Update
            case "AUTH__UPDATE__AVATAR":
                if (draft.user) {
                    draft.user.avatar = action.payload.avatar
                } else {
                    return state
                }
                break
            case "AUTH__UPDATE__LOGIN":
                if (draft.user) {
                    draft.user.login = action.payload.login
                } else {
                    return state
                }
                break
            // Loader
            case "AUTH__LOAD__FORM":
                draft.load_form = action.payload.mode
                break
            case "AUTH__LOAD__LOGOUT":
                draft.load_logout = action.payload.mode
                break
            // Clear
            case "AUTH__CLEAR__USER":
                draft.user = null
                break
            case "AUTH__CLEAR__TWO_FA":
                draft.two_fa = null
                break
            case "AUTH__CLEAR__RECOVERY_PASSWORD":
                draft.recovery_password = null
                break
            // Async
            case "AUTH__WATCH__LOGOUT": return state
            case "AUTH__WATCH__RECOVERY_PASSWORD": return state
            case "AUTH__WATCH__SIGNIN": return state
            case "AUTH__WATCH__SIGNUP": return state
            case "AUTH__WATCH__CONFIRM_EMAIL": return state
            case "AUTH__WATCH__TWO_FA": return state
            case "AUTH__WATCH__IDENTIFICATION": return state
            case "AUTH__WATCH__NEW_REFRESH_TOKEN": return state
            // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}
