import { FC, useContext } from "react"

import { Layout, Space, Divider, Table, Upload, message } from 'antd';
import { IDemo, IDemoKey, IMember, IMemberKey, PERMISSIONS, STATUS } from "../../components/typings";

import DLogo from "../../components/DLogo";
import DButton from "../../components/DButton";
import DInput from "../../components/DInput";
import DSelect from "../../components/DSelect";
import { DataContext } from "./index";

import './DContext.scss'
import { RcFile, UploadProps } from "antd/lib/upload";

const { Content } = Layout;



const DContext: FC = ({
}) => {

    const { editDemo, edit, mobile } = useContext(DataContext);

    const updateDemo = <T extends IDemoKey>(key: T, value: IDemo[T]) => {
        editDemo[key] = value
        edit({ ...editDemo })
    }

    const updateMember = <T extends IMemberKey>(key: T, value: IMember[T], member: IMember) => {
        const members = editDemo.members.map((item) => {
            if (item.id === member.id) {
                member[key] = value
                return member
            } else {
                return item
            }
        });
        edit({ ...editDemo, members: members })
    }

    const addMember = () => {
        const member: IMember = {
            id: editDemo.members.length + 1,
            name: '',
            Email: '',
            permission: 'owner',
        }
        updateDemo('members', [...editDemo.members, member]);
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'id',
            width: mobile ? 100 : 'auto',
            render: (value: IMember['name'], member: IMember, index: number) =>
                <DInput placeholder="please enter Name" value={value} onEnter={(val) => { updateMember('name', val, member) }}></DInput>,
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'id',
            // width: mobile ? 170 : 'auto',
            render: (value: IMember['Email'], member: IMember, index: number) =>
                <DInput placeholder="please enter Email" value={value} onEnter={(val) => { updateMember('Email', val, member) }}></DInput>,
        },
        {
            title: 'Permissions',
            dataIndex: 'permission',
            key: 'id',
            width: mobile ? 120 : 'auto',
            render: (permission: IMember['permission'], member: IMember, index: number) =>
                <DSelect onChange={(val) => { updateMember('permission', val as typeof PERMISSIONS[number], member) }} value={permission} values={PERMISSIONS}></DSelect>,
        },
    ];

    const beforeUpload = (file: RcFile) => {
        console.log(file)
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange: UploadProps['onChange'] = async info => {
        console.log(info)
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            console.log(info)
        }
    };
    return (
        <>
            {
                Object.keys(editDemo).length > 0 ? <Layout className="layout">
                    <Content
                        className="context"
                    >
                        <Space align={mobile?'center':undefined} direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <DInput value={editDemo.name} placeholder='please enter demoName' onEnter={(val) => updateDemo('name', val)}></DInput>
                            {
                                mobile ? (
                                    <>
                                        <Upload
                                            name="avatar"
                                            maxCount={1}
                                            style={{ display: 'block' }}
                                            listType="picture-card"
                                            className="change-logo"
                                            showUploadList={false}
                                            action="/logos"
                                            beforeUpload={beforeUpload}
                                            onChange={handleChange}
                                        >
                                            <DLogo width={70}>
                                                Change Logo
                                            </DLogo>
                                        </Upload>
                                        <div style={{width:'100vw',padding:12}}>
                                            <Divider style={{ width: '100%' }} orientation="left">Status</Divider>
                                            <DSelect onChange={(val) => updateDemo('state', val as typeof STATUS[number])} value={editDemo.state} values={STATUS}></DSelect>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Divider style={{ width: '100%' }} orientation="left">Status</Divider>

                                        <Space className="space-select">
                                            <DSelect onChange={(val) => updateDemo('state', val as typeof STATUS[number])} value={editDemo.state} values={STATUS}></DSelect>
                                            <Upload
                                                name="avatar"
                                                maxCount={1}
                                                style={{ display: 'block' }}
                                                listType="picture-card"
                                                className="change-logo"
                                                showUploadList={false}
                                                action="/logos"
                                                beforeUpload={beforeUpload}
                                                onChange={handleChange}
                                            >
                                                <DLogo width={70}>
                                                    Change Logo
                                                </DLogo>
                                            </Upload>
                                        </Space>
                                    </>
                                )
                            }
                            <div style={{ width: '100%' }}>
                                <Divider orientation="left">Members</Divider>

                                <Table tableLayout='fixed' pagination={false} columns={columns} dataSource={editDemo.members} rowKey={member => member.id} />

                                <DButton onClick={() => addMember()} width={130}>Add member</DButton>
                            </div>
                        </Space>
                    </Content>
                </Layout> : undefined
            }
        </>
    )
}

export default DContext