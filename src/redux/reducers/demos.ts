
import { IDemo } from '../../components/typings'
import { IDemoAction } from '../actions/demos'


const demos = (state: IDemo[] =
    [{
        id: 1,
        name: 'data111',
        state: 'public',
        members: [{ id: 1, Logo: '', name: 'member11', Email: '3261937664@qq.com', permission: 'owner' }]
    }, {
        id: 2,
        name: 'data222',
        state: 'public',
        members: [{ id: 1, Logo: '', name: 'member11', Email: '3261937664@qq.com', permission: 'owner' }]
    }], action: IDemoAction) => {
    const { type, payload } = action
    switch (type) {
        case 'create':
            return state
        case 'edit':
            return state
        default:
            return state
    }
}

export default demos