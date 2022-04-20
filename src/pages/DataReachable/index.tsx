import { createContext, FC, SetStateAction, useEffect, useState, Dispatch } from "react";
import { Layout } from 'antd';
import './index.scss'

import { connect } from "react-redux";
import { editAsync, createAsync } from '../../redux/actions/demos'
import { IDemo } from "../../components/typings";
import { IState } from "../../redux/const";
import DSider from "./DSider";
import DContext from "./DContext";

interface IProps {
    demos: IDemo[];
    editAsync: Function;
    createAsync: Function;
}

interface IDataContext extends IProps {
    demoList: IDemo[];
    editDemo: IDemo;
    setEditDemo: Dispatch<SetStateAction<IDemo>>
    setDemoList: Dispatch<SetStateAction<IDemo[]>>
}

export const DataContext = createContext({} as IDataContext);

const { Header } = Layout;

const DataReachable: FC<IProps> = ({
    demos,
    editAsync,
    createAsync,
}) => {
    const [demoList, setDemoList] = useState<IDemo[]>(demos);
    const [editDemo, setEditDemo] = useState<IDemo>({} as IDemo);

    useEffect(() => {
        setEditDemo(demoList[0])
    }, [demoList])

    return (
        <DataContext.Provider value={{ demos, editAsync, createAsync, editDemo, demoList, setEditDemo, setDemoList }}>
            <Layout style={{ 'height': '100vh' }}>
                <Header className="header">
                    dataReachable
                </Header>
                <Layout>
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
    editAsync, createAsync
})(DataReachable)


