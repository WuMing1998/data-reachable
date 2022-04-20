import { Input, InputProps } from "antd";
import { FC, ReactElement, useCallback, useState, KeyboardEvent } from "react";

interface IDInputProps {
    value: string,
    onEnter: (val: string) => void,
}

const DInput: FC<IDInputProps> = ({
    value,
    onEnter,
}): ReactElement => {

    const [editFlag, setEditFlag] = useState(false);

    const InputHanlder: InputProps['onPressEnter'] = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        onEnter(target.value);
        setEditFlag(false);
    }, [setEditFlag, editFlag])

    return (
        <>
            {editFlag ? <Input defaultValue={value} onPressEnter={InputHanlder}></Input> : <span style={{ 'cursor': 'pointer' }} onClick={() => setEditFlag(true)}>{value}</span>}
        </>
    )
}

export default DInput;