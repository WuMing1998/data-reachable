import { FC, useContext } from "react"

import { Layout, Space, Divider, Table } from 'antd';
import { IDemo, IMember, PERMISSIONS, STATUS } from "../../components/typings";

import DLogo from "../../components/DLogo";
import DButton from "../../components/DButton";
import DInput from "../../components/DInput";
import DSelect from "../../components/DSelect";
import { DataContext } from "./index";

import './DContext.scss'

const { Content } = Layout;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'id',
        render: (value:IMember['name'])=><DInput value={value} onEnter={(val)=>{console.log(val)}}></DInput>,
    },
    {
        title: 'Email',
        dataIndex: 'Email',
        key: 'id',
        render: (value:IMember['Email'])=><DInput value={value} onEnter={(val)=>{console.log(val)}}></DInput>,
    },
    {
        title: 'Permissions',
        dataIndex: 'permission',
        key: 'id',
        render: (permission: IMember['permission']) => <DSelect value={permission} values={PERMISSIONS}></DSelect>,
    },
];
const DContext: FC = ({
}) => {
    const { editDemo } = useContext(DataContext)
    return (
        <>
            {
                Object.keys(editDemo).length > 0 ? <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="context"
                    >
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <DInput value={editDemo.name} onEnter={(val) => { console.log(val) }}></DInput>

                            <Divider style={{ width: '100%' }} orientation="left">Status</Divider>

                            <Space className="space-select">
                                <DSelect value={editDemo.state} values={STATUS}></DSelect>

                                <div className="change-logo">

                                    <DLogo width={70}></DLogo>

                                    <span style={{ color: '#91acbd' }}>Change Logo</span>

                                </div>
                            </Space>

                            <div style={{ width: '100%' }}>
                                <Divider orientation="left">Members</Divider>

                                <Table pagination={false} columns={columns} dataSource={editDemo.members} rowKey={member => member.id} />

                                <DButton width={130}>Add member</DButton>
                            </div>
                        </Space>
                    </Content>
                </Layout> : undefined
            }
        </>
    )
}

export default DContext