import { FC } from "react";
import LogoDefault from './Logo.png'

interface IDLogo {
    width?: number;
    Logo?: string;
    children?: string;
}
const DLogo: FC<IDLogo> = ({
    width = 16,
    Logo = LogoDefault,
    children = '',
}) => {
    return (
        <div className='change-logo'>
            <img style={{ width }} src={Logo}></img>
            <span style={{ width: '100%', color: '#91acbd' }}>{children}</span>
        </div>
    )
}

export default DLogo