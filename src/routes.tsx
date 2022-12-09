// Core
import React from "react"
import {Route, Switch} from "react-router-dom"
// Pages
import {
    Main, NotFound, Signin, Signup, PasswordRecovery, CheckEmail, NewPassword, About, ConfirmEmail, TwoFa,
    Cabinet, Contacts, News, NewsPage, Faq, PrivacyPolicy, TermsOfUse
} from 'pages'


export const Routes = () => {
    return (
        <Switch>
            {/*-- Main --*/}
            <Route path='/:lang/' render={() => <Main />} exact />
            <Route path='/:lang/about' render={() => <About/>} />

            <Route path='/:lang/news/:tab' render={() => <News/>} />
            <Route path='/:lang/news' render={() => <News/>} />

            <Route path='/:lang/news-page/:id' render={() => <NewsPage/>} />
            {/*<Route path='/:lang/news-page' render={() => <NewsPage/>} />*/}

            <Route path='/:lang/faq' render={() => <Faq/>} />
            <Route path='/:lang/contacts' render={() => <Contacts/>} />
            <Route path='/:lang/privacy-policy' render={() => <PrivacyPolicy/>} />
            <Route path='/:lang/terms-of-use' render={() => <TermsOfUse/>} />
            {/*-- Cabinet --*/}
            <Route path='/:lang/cabinet/:tab/:sab_tab' render={() => <Cabinet/>} />
            <Route path='/:lang/cabinet/:tab' render={() => <Cabinet/>} />
            <Route path='/:lang/cabinet' render={() => <Cabinet/>} />
            {/*-- Auth --*/}
            <Route path='/:lang/signin' render={() => <Signin/>} />
            <Route path='/:lang/signup' render={() => <Signup/>} />
            <Route path='/:lang/password-recovery' render={() => <PasswordRecovery/>} />
            <Route path='/:lang/check-email' render={() => <CheckEmail/>} />
            <Route path='/:lang/new-password/:token' render={() => <NewPassword/>} />
            <Route path='/:lang/confirm-email/:token' render={() => <ConfirmEmail/>} />
            <Route path='/:lang/two-fa' render={() => <TwoFa/>} />
            {/*-- Other --*/}
            <Route path='404' render={() => (<NotFound/>)} exact />
            <Route path='*' render={() => (<NotFound/>)} />
        </Switch>
    )
}
