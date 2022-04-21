import { createContext, FC, SetStateAction, useEffect, useState, Dispatch, useDeferredValue } from "react";
import { Layout } from 'antd';
import './index.scss'

import { connect } from "react-redux";
import { edit, create } from '../../redux/actions/demos'
import { IDemo } from "../../components/typings";
import { IState } from "../../redux/const";
import DSider from "./DSider";
import DContext from "./DContext";

import useWindoSize from '../../hooks/useWindowSize'

interface IProps {
    demos: IDemo[];
    edit: (demo: IDemo) => void;
    create: (demo: IDemo) => void;
}

interface IDataContext extends IProps {
    demoList: IDemo[];
    editDemo: IDemo;
    setEditDemo: Dispatch<SetStateAction<IDemo>>
    setDemoList: Dispatch<SetStateAction<IDemo[]>>
    mobile:boolean
}

export const DataContext = createContext({} as IDataContext);

const { Header } = Layout;

const DataReachable: FC<IProps> = ({
    demos,
    edit,
    create,
}) => {
    const [demoList, setDemoList] = useState<IDemo[]>(demos);
    const [editDemo, setEditDemo] = useState<IDemo>({} as IDemo);
    const [mobile, setMobile] = useState(false);

    const deferredDemoList = useDeferredValue(demoList)
    const deferredEditDemo = useDeferredValue(editDemo)

    const windowSize = useWindoSize();

    useEffect(() => {
        if (windowSize)
            setMobile(windowSize?.width < 500)
    }, [windowSize])

    useEffect(() => {
        setDemoList(demos)
    }, [demos])

    return (
        <DataContext.Provider value={{ demos, edit, create, editDemo: deferredEditDemo, demoList: deferredDemoList, setEditDemo, setDemoList,mobile }}>
            <Layout style={{ 'height': '100vh' }}>
                <Header className="header">
                    dataReachable
                </Header>
                <Layout className="layout">
                    <DSider></DSider>
                    <DContext></DContext>
                </Layout>
            </Layout>
        </DataContext.Provider>
    )
}
export default connect(({ demos }: IState) => {
    return { demos }
}, {
    edit, create
})(DataReachable)


