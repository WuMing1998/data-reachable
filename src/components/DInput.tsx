import { Input, InputProps } from "antd";
import { FC, ReactElement, useCallback, useState, KeyboardEvent, useDeferredValue } from "react";

interface IDInputProps {
    value: string,
    onEnter: (val: string) => void,
    placeholder?: string,
}

const DInput: FC<IDInputProps> = ({
    value,
    onEnter,
    placeholder = '',
}): ReactElement => {

    const [editFlag, setEditFlag] = useState(false);
    const deferredEditFlag = useDeferredValue(editFlag);

    const InputHanlder: InputProps['onPressEnter'] = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        onEnter(target.value);
        setEditFlag(false);
    }, [setEditFlag, deferredEditFlag])

    return (
        <>
            {deferredEditFlag || value.length === 0 ? <Input placeholder={placeholder} defaultValue={value} onPressEnter={InputHanlder}></Input> : <span style={{ 'cursor': 'pointer' }} onClick={() => setEditFlag(true)}>{value}</span>}
        </>
    )
}

export default DInput;