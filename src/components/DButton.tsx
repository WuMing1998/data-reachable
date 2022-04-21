import { FC, ReactElement } from "react";

import { PlusOutlined } from '@ant-design/icons'
import { Button } from "antd";

interface IDButtonProps {
    width?: number | string
    children?: any
    onClick: () => void
    mobile?: boolean
}


const DButton: FC<IDButtonProps> = ({
    width = '100%',
    children = 'button',
    onClick,
    mobile
}): ReactElement => {
    const ButtonStyle = { 
        width,
        minWidth: mobile?20:100,
        color: '#999',
        marginTop: mobile?0:10,
        display: 'flex',
        justifyContent: mobile?'center':'space-between',
        alignItems: 'center' 
    }
    return (
        <Button onClick={onClick}
            style={ButtonStyle}
        >
            <PlusOutlined style={{ 'marginRight': mobile?0:12 }} color="#EEE" />
            {mobile ? undefined : <label>{children}</label>}
        </Button>
    )
}

export default DButton;