// Type
import { RootState } from 'store'

const authSelect = {
    is_auth: (store: RootState) => store.auth.auth,
    token: (store: RootState) => store.auth.token,
    two_fa: (store: RootState) => store.auth.two_fa,
    recovery_password: (store: RootState) => store.auth.recovery_password,
    valid_password: (store: RootState) => store.auth.valid_password,
    success_signup: (store: RootState) => store.auth.success_signup,
    form_errors: (store: RootState) => store.auth.form_errors,
    user: (store: RootState) => store.auth.user,
    // Loader
    load_form: (store: RootState) => store.auth.load_form,
    load_logout: (store: RootState) => store.auth.load_logout,
}

export default authSelect