// Types
import {Language} from 'types/app-type'
import {MenuList} from 'types/cabinet/cabinet-main-type'
import { TProfileTab } from 'types/cabinet/profile'
import { TSettingTab } from 'types/cabinet/settings-type'


const isDev = process.env.NODE_ENV === 'development'
const config =  {
    app: {
        isDev,
        // apiURL: isDev ? 'http://192.168.83.180/' : 'https://api.catchcoin.io/',
        apiURL: 'https://api.catchcoin.io',
        domain: isDev ? 'localhost' : '.catchcoin.io',
        pages_with_layout: ['', 'about', 'news', 'news-page', 'faq', 'contacts', 'terms-of-use', 'privacy-policy'],
        pages_with_coming_soon: ['terms-of-use', 'privacy-policy'],
        page_header_active_shadow: ['about', 'news', 'news-page', 'faq'],
        // language_list: ['en', 'ru', 'de'] as Language[],
        language_list: ['en',] as Language[],
        page_token: [ 'about', 'faq', 'contacts', 'cabinet', 'signin', 'signup'],
        months: [
            {title: 'January', val:'1'}, {title: 'February', val:'2'}, {title: 'March', val:'3'},{title: 'April', val:'4'},
            {title: 'May', val:'5'}, {title: 'June', val:'6'}, {title: 'July', val:'7'}, {title: 'August', val:'9'},
            {title: 'September', val:'5'}, {title: 'October', val:'5'}, {title: 'November', val:'5'}, {title: 'December', val:'5'},
        ],
    },
    cabinet: {
        main: {
            menu_mode: ['home', 'portfolio', 'transactions', 'setting', 'profile'] as MenuList[],
        },
        profile: {
            tab: [ 'account-details', 'saved-addresses', 'activity'] as string[]
        },
        setting: {
            tab: ['preferences','security','notifications'] as string[]
        }
    }
}

export default config
