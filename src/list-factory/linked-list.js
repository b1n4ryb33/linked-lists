import { nodeFactory, kvNodeFactory } from "../node-factory/node-factory";

function linkedListFactory(){

    let _head = nodeFactory();
    let _tail = nodeFactory();

    const append = (value) => {
        
        let node = nodeFactory();
        node.setValue(value);

        if(_tail.getValue() == null){
            _head = node;
            _tail = node;
            return;
        }

        _tail.setPointer(node);
        _tail = node;

    }

    const prepend = (value) => {
        let node = nodeFactory();
        node.setValue(value);

        if(_head.getValue() == null){
            _head = node;
            _tail = node;
            return;
        }

        node.setPointer(_head);
        _head = node;
    }

    const head = () => {
        return _head;
    }

    const tail = () => {
        return _tail;
    }

    const at = (index) => {
        
        if(size() <= index){
            console.log(`[Error]: Cant read item at ${index}. Index is out of bound.`);
            return null;
        }

        let current = _head;

        while(index > 0){
            current = current.getPointer();
            index--;
        }

        return current;

    }

    const pop = () => {
        
        if(_head == null){
            return;
        }

        let current = _head;

        while (current != null && current.getPointer() != _tail){
            current = current.getPointer();
        }

        current.setPointer(null);
        _tail = current;
    }

    const contains = (value) => {

        let current = _head;

        while (current != null){
            
            if(current.getValue() == value){
                return true;
            }
            
            current = current.getPointer();
        }

        return false;

    }

    const find = (value) => {

        let current = _head;
        let index = 0;

        while (current != null){

            if(current.getValue() == value){
                return index;
            }
            
            index++;
            current = current.getPointer();
        }
        return null;
    }

    const insertAt = (value, index) => {

    }

    const toString = () => {

        let current = _head;
        let listString = "";

        while (current != null && current.getValue() != null){
            listString += current.getValue() + ", ";
            current = current.getPointer();
        }

        return listString;
    }

    const size = () => {
        let current = _head;
        let size = 0;

        while (current != null){
            size++;
            current = current.getPointer();
        }
        return size;
    }

    return { append, prepend, toString, size, head, tail, at, pop, contains, find };
}

function kvListFactory(){

    let _head = kvNodeFactory();
    let _tail = kvNodeFactory();

    const append = (key, value) => {
        
        let node = kvNodeFactory();
        node.set(key, value);

        if(_tail.getValue() == null){
            _head = node;
            _tail = node;
            return;
        }

        _tail.setPointer(node);
        _tail = node;

    }

    const prepend = (key, value) => {
        let node = kvNodeFactory();
        node.set(key, value);

        if(_head.getValue() == null){
            _head = node;
            _tail = node;
            return;
        }

        node.setPointer(_head);
        _head = node;
    }

    const head = () => {
        return _head;
    }

    const tail = () => {
        return _tail;
    }

    const at = (index) => {
        
        if(size() <= index){
            console.log(`[Error]: Cant read item at ${index}. Index is out of bound.`);
            return null;
        }

        let current = _head;

        while(index > 0){
            current = current.getPointer();
            index--;
        }

        return current;

    }

    const pop = () => {
        
        if(_head == null){
            return;
        }

        let current = _head;

        while (current != null && current.getPointer() != _tail){
            current = current.getPointer();
        }

        current.setPointer(null);
        _tail = current;
    }

    const containsValue = (value) => {

        let current = _head;

        while (current != null){
            
            if(current.getValue() == value){
                return true;
            }
            
            current = current.getPointer();
        }

        return false;

    }

    const containsKey = (key) => {

        let current = _head;

        while (current != null){
            
            if(current.getKey() == key){
                return true;
            }
            
            current = current.getPointer();
        }

        return false;

    }

    const findValue = (value) => {

        let current = _head;
        let index = 0;

        while (current != null){

            if(current.getValue() == value){
                return index;
            }
            
            index++;
            current = current.getPointer();
        }
        return null;
    }

    const findKey = (key) => {

        let current = _head;
        let index = 0;

        while (current != null){

            if(current.getKey() == key){
                return index;
            }
            
            index++;
            current = current.getPointer();
        }
        return null;
    }

    const updateValue = (key, value) => {
        
        let current = _head;

        while (current != null && current.getKey() != key){
            current = current.getPointer();
        }

        if (current != null){
            current.setValue(value);
        }
    }

    const toString = () => {

        let current = _head;
        let listString = "";

        while (current != null && current.getKey() != null){
            listString += `Key: ${current.getKey()}, Value: ${current.getValue()}\n`;
            current = current.getPointer();
        }

        return listString;
    }

    const size = () => {
        let current = _head;
        let size = 0;

        while (current != null){
            size++;
            current = current.getPointer();
        }
        return size;
    }

    return { append, prepend, toString, size, head, tail, at, pop, containsKey, containsValue, findKey, findValue, updateValue };
}


export { linkedListFactory, kvListFactory };