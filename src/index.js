
let currentCount = 0;
let currentCount1 = 1;
const createEnumerableProperty = (a) => {return a;};
const createNotEnumerableProperty = () => {return Symbol();} ;
const createProtoMagicObject = () => {return Function;};

const incrementor = () => {
    currentCount++;
    incrementor.toString=()=>{return currentCount};
    return incrementor;};

const asyncIncrementor = () => {      
  let count = function() {return currentCount1++;};  
  return count();};

const createIncrementer = () => {    
    function* foo() {    
        let index = 1;    
        while(index<10)
          yield index++;
    }
    return foo()};

const returnBackInSecond = (result) => {
    return new Promise(function(resolve,reject) {
    setTimeout(() => {resolve(result);
      }, 1000);})};

const getDeepPropertiesCount = (obj) => {
   const arr = Object.keys(obj);
   let count = arr.length;
   for(let key of arr) {    
       count+=getDeepPropertiesCount(obj[key]);
     }
    return count;
};

const createSerializedObject = () => {return new String;};
const toBuffer = () => {};
const sortByProto = (arr) => {return arr.sort()};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;