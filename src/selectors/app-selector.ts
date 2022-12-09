// Type
import { RootState } from 'store'


const appSelect = {
    alert: (store: RootState) => store.app.alert,
    push: (store: RootState) => store.app.push,
    menu_mode: (store: RootState) => store.app.menu_mode,
    language: (store: RootState) => store.app.language,
    not_found_redirect: (store: RootState) => store.app.not_found_redirect,
    // Load
    init: (store: RootState) => store.app.init,
}

export default appSelect
