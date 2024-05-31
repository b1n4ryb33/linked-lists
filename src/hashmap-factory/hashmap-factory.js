import { kvListFactory } from "../list-factory/linked-list";


function hashmapFactory(){

    let _buckets = new Array(16);
    let _loadFactor = 0.75;

    const set = (key, value) => {
        if(shouldGrow()){
           grow();
        }

        insertOrUpdate(key, value);
    }

    const grow = ()=>{
        const tempItems = [];

        _buckets.forEach(bucket => {
            if (bucket != null && bucket != undefined) {
                let current = bucket.head();
                while (current != null) {
                    tempItems.push({ key: current.getKey(), value: current.getValue() });
                    current = current.getPointer();
                }
            }
        });

        _buckets = new Array(_buckets.length * 2);

        tempItems.forEach(item => {
            insertOrUpdate(item.key, item.value);
        });
    }

    const insertOrUpdate = (key, value) => {
        let bucketKey = getBucketKey(key);
      
        if(_buckets[bucketKey] == undefined || _buckets[bucketKey] == null){
            _buckets[bucketKey] = kvListFactory();
        }

        if(_buckets[bucketKey].containsKey(key)){
            _buckets[bucketKey].updateValue(key, value);
            return;
        }

        _buckets[bucketKey].append(key, value);
    }

    const get = (key) => {
        let bucketKey = getBucketKey(key);
        let bucket = _buckets[bucketKey];

       if(bucket.containsKey(key)){
        let index = bucket.findKey(key);
        return bucket.at(index).getValue();
       }

       return null;

    }


    const has = (key) => {
        const bucketKey = getBucketKey(key);
        if(_buckets[bucketKey] == undefined || _buckets[bucketKey] == null){
            return false;
        }

        return _buckets[bucketKey].containsKey(key);
    }

    const remove = (key) => {
        if (!has(key)){
            return false;
        }
        
    }

    const getBucketKey = (key) => {
        let hashedKey = hash(key);
        let bucketKey = hashedKey % _buckets.length;

        if (bucketKey < 0 || bucketKey >= _buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        return bucketKey;
    }

    const getActualSize = () => {
        return _buckets.reduce((counter, bucket) => {
            if(bucket != undefined || bucket != null){
                return counter += 1;
            }
        }, 0);
    }

    const shouldGrow = () => {
        let upperBound = Math.round((_buckets.length * _loadFactor));
        let actualSize = getActualSize();

        if(upperBound < actualSize){
            return true;
        }

        return false;
    }

    const toString = () => {
        _buckets.forEach(bucket => {
            if (bucket != undefined && bucket != null){
                console.log(`\nBucket: {\n${bucket.toString()} }\n`);
            }
        });
    }

    return {set, get, has, getActualSize, toString};
}


function hash(key){
    let hashCode = 0;
    const primeNumber = 89;

    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
   
    return hashCode;
}

export {hashmapFactory, hash};