

function nodeFactory(){

    let _value = null;
    let _pointer = null;

    const setValue = (value) => {
        _value = value;
    }

    const setPointer = (pointer) => {
        _pointer = pointer;
    }

    const getValue = () => {
        return _value;
    }

    const getPointer = () => {
        return _pointer;
    }


    return { setValue, setPointer, getValue, getPointer };
}

export { nodeFactory };