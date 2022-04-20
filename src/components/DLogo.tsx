import { FC } from "react";
import LogoDefault from './Logo.png'

interface IDLogo {
    width?: number;
    Logo?:string
}
const DLogo: FC<IDLogo> = ({
    width = 16,
    Logo = LogoDefault
}) => {
    return <img style={{ width }} src={Logo}></img>
}

export default DLogo