import { FC, ReactElement, useDeferredValue, useState } from "react";

import { Select } from 'antd';
import { STATUS_TYPE, PERMISSIONS_TYPE, IDemo, IMember, PERMISSIONS, STATUS } from "./typings";
const { Option } = Select;

interface IDSelectProps {
    values: STATUS_TYPE | PERMISSIONS_TYPE
    value: IDemo['state'] | IMember['permission']
    onChange: (val: typeof PERMISSIONS[number] | typeof STATUS[number]) => void
}

const DSelect: FC<IDSelectProps> = ({
    values,
    value,
    onChange
}): ReactElement => {
    const [selectFlag, setSelect] = useState(false);

    const deferredSelectFlag = useDeferredValue(selectFlag);
    return (
        <>
            {
                deferredSelectFlag ?
                    <Select defaultValue={value} style={{ width: 90 }} onChange={(val) => { onChange(val); setSelect(false) }}>
                        {values.map((val) => {
                            return <Option key={val} value={val}>{val}</Option>
                        })}
                    </Select>
                    :
                    <span style={{ 'cursor': 'pointer' }} onClick={() => { setSelect(true) }}>{value}</span>
            }
        </>
    )
}

export default DSelect;