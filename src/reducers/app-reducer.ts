// Core
import produce, {Draft} from 'immer'
// Type
import { AppActionReducerType} from 'actions/app-action'
import {AlertType, Language, TPushMessage} from 'types/app-type'


const initialState = {
    init: false,
    alert: null as AlertType | null,
    push: null as TPushMessage | null,
    menu_mode: false,
    language: 'en' as Language,
    not_found_redirect: false,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
         switch (action.type) {
             // Sync
             case "APP__SET__ALERT":
                 draft.alert = action.payload.alert
                 break
             case "APP__SET__LANGUAGE":
                 draft.language = action.payload.mode
                 break
             case "APP__SET__NOT_FOUND_REDIRECT":
                 draft.not_found_redirect = action.payload.mode
                 break
             case "APP__SET__PUSH":
                 draft.push = action.payload.push
                 break
             // Load
             case "APP__SET__INIT":
                 draft.init = action.payload.mode
                 break
             case "APP__SET__MENU_MODE":
                 draft.menu_mode = action.payload.mode
                 break
             // Async
             case "APP__WATCH__INIT": return  state
             case "APP__WATCH__CLEAR_STATE": return state
             // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}
