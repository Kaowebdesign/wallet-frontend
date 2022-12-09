// Core
import {useMemo} from "react"
import {useHistory, useLocation, useParams, useRouteMatch} from 'react-router-dom'
import queryString  from 'query-string'


const useRouter = <D = {}>() => {
    const history = useHistory()
    const location = useLocation()
    const params = useParams()
    const match = useRouteMatch()

    return useMemo(() => {
        return {
            push: history.push,
            path: location.pathname,
            query: {
                ...queryString.parse(location.search),
                ...params,
            } as D,
            match,
            location,
            history,
        }
    }, [history, location, params, match])
}

export default useRouter

