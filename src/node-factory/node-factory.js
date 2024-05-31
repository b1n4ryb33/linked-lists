

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

function kvNodeFactory(){
    let _key = null;
    let _value = null;
    let _pointer = null;

    const set = (key, value) => {
        _key = key;
        _value = value;
    }

    const setValue = (value) => {
        _value = value;
    }

    const setPointer = (pointer) => {
        _pointer = pointer;
    }

    const getValue = () => {
        return _value;
    }

    const getKey = () => {
        return _key;
    }

    const getPointer = () => {
        return _pointer;
    }

    return { set, setValue, setPointer, getKey, getValue, getPointer };
}

export { nodeFactory, kvNodeFactory };