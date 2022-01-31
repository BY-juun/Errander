import { useCallback, useState } from "react"

const useInput = (initialData : any) => {
    const [value,setValue] = useState(initialData);
    const onChangeInput = (e : any) => {
        setValue(e.target.value);
    };
    return [value,setValue,onChangeInput];
}

export default useInput;