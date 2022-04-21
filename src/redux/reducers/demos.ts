
import { IDemo } from '../../components/typings'
import { IDemoAction } from '../actions/demos'


const demos = (state: IDemo[] =
    [{
        id: 1,
        name: 'demo1',
        state: 'public',
        Logo: '',
        members: [{ id: 1, name: 'chengkun', Email: '3261937664@qq.com', permission: 'owner' }]
    }, {
        id: 2,
        name: 'demo2',
        state: 'private',
        Logo: '',
        members: [{ id: 1, name: 'chengkun2', Email: '3261937664@qq.com', permission: 'owner' }]
    }], action: IDemoAction) => {
    const { type, payload } = action
    switch (type) {
        case 'create':
            return [...state, payload]
        case 'edit':
            console.log(state.map((demo) => {
                return demo.id === (payload as IDemo).id ? payload : demo
            }))
            return state.map((demo) => {
                return demo.id === (payload as IDemo).id ? payload : demo
            })
        default:
            return state
    }
}

export default demos