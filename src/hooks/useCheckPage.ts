// Core
import {useEffect, useState} from 'react'
import {useSelector} from "react-redux"
// Hooks
import {useRouter} from 'hooks'
// Utils
import {config} from "utils"
// Selector
import {appSelect} from "selectors"
// Types
import {Language} from "types/app-type"


const useCheckPage = () => {
    const {path} = useRouter()
    const menuMode = useSelector(appSelect.menu_mode)

    const [layout, setLayout] = useState(false)
    const [soon, setSoon] = useState(false)
    const [show, setShow] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [active, setActive] = useState('')
    const [scroll, setScroll] = useState(0)

    const [lang, setLang] = useState<Language | null>(() => {
        const prepareLang = path.split('/')[1] as Language

        return config.app.language_list.includes(prepareLang) ? prepareLang : null
    })

    useEffect(() => {
        let triggerLayout = false
        const prepareUrl = path.split('/')

        prepareUrl
            .filter((elem, key) => key !== 0)
            .forEach(elem => {


            if (config.app.page_header_active_shadow.includes(elem)) {
                setShow(true)
            } else {
                setShow(false)
            }

            if (!triggerLayout) {
                if (config.app.pages_with_layout.includes(elem)) {
                    setLayout(true)
                    setActive(elem)
                    triggerLayout = true
                } else {
                    setLayout(false)
                    setActive('')
                }

                if (config.app.pages_with_coming_soon.includes(elem)) {
                    setSoon(true)
                } else {
                    setSoon(false)
                }
            }
        })
    }, [path])

    useEffect(() => {
        if ((scroll >= 30 || show ) && !menuMode) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    }, [show, scroll, menuMode])

    useEffect(() => {
        function handleScroll(this: Window) {
            setScroll(this.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const language = path.split('/')[1] as Language

        if (config.app.language_list.includes(language)) {
            setLang(language)
        }

    }, [path])

    return {
        active, shadow, layout, lang, soon,
    }
}

export default useCheckPage
