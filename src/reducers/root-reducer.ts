// Core
import { combineReducers } from 'redux'
// Reducers
import { appReducer } from './app-reducer'
import { authReducer } from './auth-reducer'
import { mainReducer } from './main-reducer'
import { cabinetSettingsReducer } from "./cabinet/settings-reducer";
import { cabMainReducer } from './cabinet/cab-main-reducer'
import { profileReducer } from './cabinet/profile-reducer'
import { cabinetHomeReducer } from './cabinet/home-reducer'
import { portfolioReducer } from './cabinet/portfolio-reducer'


export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  main: mainReducer,
  cabinetSettings: cabinetSettingsReducer,
  cabinet: cabMainReducer,
  profile: profileReducer,
  cabinetHome: cabinetHomeReducer,
  portfolio: portfolioReducer
})
