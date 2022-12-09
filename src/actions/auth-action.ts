// Type
import { ActionsCreatorType } from "store"
import {LoginData, SignupData, TokenData, TwoFa, IUserType, RecoveryPassword, RecoveryPasswordData, IUserName} from 'types/auth-type'
import { TMakeRequestOptions } from 'sagas/root-saga'


export const AUTH__WATCH__SIGNUP = 'AUTH__WATCH__SIGNUP'
export const AUTH__WATCH__SIGNIN = 'AUTH__WATCH__SIGNIN'
export const AUTH__WATCH__LOGOUT = 'AUTH__WATCH__LOGOUT'
export const AUTH__WATCH__CONFIRM_EMAIL = 'AUTH__WATCH__CONFIRM_EMAIL'
export const AUTH__WATCH__TWO_FA = 'AUTH__WATCH__TWO_FA'
export const AUTH__WATCH__IDENTIFICATION = 'AUTH__WATCH__IDENTIFICATION'
export const AUTH__WATCH__NEW_REFRESH_TOKEN = 'AUTH__WATCH__NEW_REFRESH_TOKEN'
export const AUTH__WATCH__RECOVERY_PASSWORD = 'AUTH__WATCH__RECOVERY_PASSWORD'


export const authActions = {
    // Setter
    set_auth: (mode: boolean) => ({type: 'AUTH__SET__AUTH', payload: {mode}} as const),
    set_token: (data: TokenData | null) => ({type: 'AUTH__SET__TOKEN', payload: {data}} as const),
    set_two_fa: (data: TwoFa | null) => ({type: 'AUTH__SET__TWO_FA', payload: {data}} as const),
    set_recovery_password: (data: RecoveryPassword | null) => ({type: 'AUTH__SET__RECOVERY_PASSWORD', payload: {data}} as const),
    set_valid_password: (mode: boolean) => ({type: 'AUTH__SET__VALID_PASSWORD', payload: {mode}} as const),
    set_success_signup: (email: string | null) => ({type: 'AUTH__SET__SUCCESS_SIGNUP', payload: {email}} as const),
    set_form_errors: (data: any | null) => ({type: 'AUTH__SET__FORM_ERRORS', payload: {data}} as const),
    set_user: (data: IUserType | null) => ({type: 'AUTH__SET__USER', payload: {data}} as const),
    // Update
    update_avatar: (avatar: string) => ({type: 'AUTH__UPDATE__AVATAR', payload: {avatar}} as const),
    update_login: (login: string) => ({type: 'AUTH__UPDATE__LOGIN', payload: {login}} as const),
    // Clear
    clear_user: () => ({type: 'AUTH__CLEAR__USER'} as const),
    clear_two_fa: () => ({type: 'AUTH__CLEAR__TWO_FA'} as const),
    clear_recovery_password: () => ({type: 'AUTH__CLEAR__RECOVERY_PASSWORD'} as const),
    // Loader
    load_form: (mode: boolean) => ({type: 'AUTH__LOAD__FORM', payload: {mode}} as const),
    load_logout: (mode: boolean) => ({type: 'AUTH__LOAD__LOGOUT', payload: {mode}} as const),
    // Async
    watch_signup: (data: SignupData) => ({type: AUTH__WATCH__SIGNUP, payload: {...data}} as const),
    watch_signin: (data: LoginData) => ({type: AUTH__WATCH__SIGNIN, payload: {...data}} as const),
    watch_logout: () => ({type: AUTH__WATCH__LOGOUT} as const),
    watch_new_refresh_token: (token: TokenData, resendParams: TMakeRequestOptions) => ({type: AUTH__WATCH__NEW_REFRESH_TOKEN, payload: {token, resendParams}} as const),
    watch_confirm_email: (token: string) => ({type: AUTH__WATCH__CONFIRM_EMAIL, payload: {token}} as const),
    watch_two_fa: (code: string) => ({type: AUTH__WATCH__TWO_FA, payload: {code}} as const),
    watch_recovery_password: (data: RecoveryPasswordData) => ({type: AUTH__WATCH__RECOVERY_PASSWORD, payload: {...data}} as const),
    watch_identification: (token: TokenData | null) => ({type: AUTH__WATCH__IDENTIFICATION, payload: {token}} as const),
}

export type AuthActionReducerType = ActionsCreatorType<typeof authActions>

export default authActions
