import { FC, ReactElement } from "react";

import { Select } from 'antd';
import { STATUS_TYPE, PERMISSIONS_TYPE, IDemo, IMember } from "./typings";
const { Option } = Select;

interface IDSelectProps {
    values: STATUS_TYPE | PERMISSIONS_TYPE,
    value: IDemo['state'] | IMember['permission']
}

function handleChange(value: any) {
    console.log(`selected ${value}`);
}

const DSelect: FC<IDSelectProps> = ({
    values,
    value
}): ReactElement => {
    return (
        <>
            <Select defaultValue={value} style={{ width: 120 }} onChange={handleChange}>
                {values.map((val) => {
                    return <Option key={val} value={val}>{val}</Option>
                })}
            </Select>
        </>
    )
}

export default DSelect;