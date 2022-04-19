
import { IDemoAction } from '../actions/demo'
import { IState } from '../const'


const demo = (state: IState, action: IDemoAction) => {
    const { type, payload } = action
    switch (type) {
        case 'create':
            return { ...state }
        case 'edit':
            return { ...state }
        case 'search':
            return { ...state }
        default:
            return { ...state }
    }
}

export default demo