import { IDemo } from '../../components/typings';
import type { DEMO_TYPE } from '../const'

export interface IDemoAction {
    type: DEMO_TYPE;
    payload: IDemo | IDemo['name']
}

export const search = (payload: IDemo['name']): IDemoAction => ({ type: 'search', payload })

export const edit = (payload: IDemo): IDemoAction => ({ type: 'edit', payload })

export const create = (payload: IDemo): IDemoAction => ({ type: 'create', payload })

export const searchAsync = (payload: IDemo['name']) => {
    return (dispatch: Function) => {
        setTimeout(() => {
            dispatch(search(payload))
        }, 1000)
    }
}

export const editAsync = (payload: IDemo) => {
    return (dispatch: Function) => {
        setTimeout(() => {
            dispatch(edit(payload))
        }, 1000)
    }
}

export const createAsync = (payload: IDemo) => {
    return (dispatch: Function) => {
        setTimeout(() => {
            dispatch(create(payload))
        }, 1000)
    }
}