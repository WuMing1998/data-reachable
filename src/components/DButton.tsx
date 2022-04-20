import { FC, ReactElement } from "react";

import { PlusOutlined } from '@ant-design/icons'
import { Button } from "antd";

interface IDButtonProps {
    width?: number | string
    children?: any
}

const DButton: FC<IDButtonProps> = ({
    width = '100%',
    children = 'button'
}): ReactElement => {
    return (
        <Button style={{ width, minWidth: 100, color: '#999',marginTop:10,display:'flex',justifyContent:'space-between',alignItems:'center' }}>
            <PlusOutlined style={{ 'marginRight': 12 }} color="#EEE" />
            <label>{children}</label>
        </Button>
    )
}

export default DButton;