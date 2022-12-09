export interface LoginData {
    login: string
    password: string
}

export interface SignupData extends LoginData {
    email: string
    firstName: string
    lastName: string
    subscribe: boolean | number
}

export interface TokenData {
    auth_token: string
    refresh_token: string
}

export interface HashDate {
    hash: string
}

export interface TwoFaAuth extends HashDate {
    code: string
}

export type TwoFaMethod = 'method_email' | 'method_google'

export interface TwoFaAuthData extends HashDate {
    method: TwoFaMethod
}

export interface TwoFaAuthFullData extends TwoFaAuth {
    method: TwoFaMethod
}

export interface IUserName {
    first_name: string
    last_name: string
}

export interface IUserType extends IUserName{
    email: string
    login: string
    avatar: string
}

export type TwoFa = {
    hash: string
    method: 'method_email' | 'method_google'
}

export type RecoveryPassword = {
    expire_at: string
}

export type RecoveryPasswordData = {
    email?: string
    password?: string
    token: string | null
}