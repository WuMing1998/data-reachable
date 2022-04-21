import { FC, useContext, useCallback, ChangeEvent, useEffect } from "react"

import { Tag, Space, List, Layout, Input, InputProps, Select } from 'antd';
import DLogo from "../../components/DLogo";
import DButton from "../../components/DButton";
import { IDemo } from "../../components/typings";
import { DataContext } from "./index";

import './DSider.scss'


const { Sider } = Layout;
const { Search } = Input;
const { Option } = Select

interface ISiderProps {
}

const DSider: FC<ISiderProps> = ({
}) => {

    const { demos, setEditDemo, setDemoList, demoList, create, mobile } = useContext(DataContext)

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

    const createDemo = () => {
        const demo: IDemo = {
            id: demos.length + 1,
            name: '',
            Logo: '',
            state: 'private',
            members: [],
        }
        create(demo)
    }

    useEffect(() => {
        if (mobile) {
            setEditDemo(demoList[0]);
        }
    }, [mobile])

    const checkedDemo = (id: number) => {
        const checked = demoList.find((demo) => {
            return demo.id === id
        })
        if (checked)
            setEditDemo(checked)
    }

    return (
        <>
            <Sider width={240} className="sider">
                <Space direction={mobile ? 'horizontal' : 'vertical'} size={mobile ? 'small' : 'middle'} style={mobile ? { display: 'flex', justifyContent: 'space-between' } : { display: 'flex' }}>
                    {mobile ? (
                        <>
                            <Select defaultValue={demoList[0].name} onChange={(val) => { checkedDemo(Number(val)) }} style={{ width: '70vw' }}>
                                {demoList.map((demo) => {
                                    return <Option key={demo.id} value={demo.id}>{demo.name}</Option>
                                })}
                            </Select>
                        </>
                    ) : (
                        <>
                            <Search className="search" placeholder="search" onChange={(e) => { searchChange(e) }} onSearch={onSearch} style={{ width: '100%' }} />
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
                        </>
                    )}

                    <DButton width={mobile ? 10 : '100%'} mobile={mobile} onClick={() => createDemo()}>{mobile ? ' ' : 'Create new organization'}</DButton>
                </Space>
            </Sider>
        </>
    )
}

export default DSider