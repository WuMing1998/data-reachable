import { FC, useContext, useCallback, ChangeEvent } from "react"

import { Tag, Space, List, Layout, Input, InputProps } from 'antd';
import DLogo from "../../components/DLogo";
import DButton from "../../components/DButton";
import { IDemo } from "../../components/typings";
import { DataContext } from "./index";

import './DSider.scss'


const { Sider } = Layout;
const { Search } = Input

interface ISiderProps {
}

const DSider: FC<ISiderProps> = ({
}) => {

    const { demos, setEditDemo, setDemoList, demoList } = useContext(DataContext)

    const onSearch = useCallback((value: string) => {
        setDemoList(demoList.filter(demo => {
            return demo.name.indexOf(value) !== -1;
        }))
    }, [demoList, setDemoList])

    const searchChange: InputProps['onChange'] = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setDemoList(demos);
        }
    }, [setDemoList, demos])

    const changeDemo = useCallback((demo: IDemo) => {
        setEditDemo(demo);
    }, [setEditDemo])

    return (
        <>
            <Sider width={240} className="sider">
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Search placeholder="search" onChange={(e) => { searchChange(e) }} onSearch={onSearch} style={{ width: '100%' }} />
                    <Tag className="tag" icon={<DLogo />}>
                        dataReachable Pty Ltd
                    </Tag>
                    <List
                        style={{ width: '100%', background: '#FFF' }}
                        itemLayout="horizontal"
                        dataSource={[...demoList]}
                        renderItem={demo => (
                            <List.Item onClick={() => changeDemo(demo)} key={demo.id} style={{ 'width': '100%', padding: 7, cursor: 'pointer' }}>
                                <DLogo></DLogo>
                                <label>{demo.name}</label>
                            </List.Item>
                        )}
                    />
                    <DButton>Create new organization</DButton>
                </Space>
            </Sider>
        </>
    )
}

export default DSider