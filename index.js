function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(item) {
      result.push(callback(item));
    });
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let accumulator = acc !== undefined ? acc : collection[0];
    let start = acc !== undefined ? 0 : 1;
    myEach(collection.slice(start), function(item) {
      accumulator = callback(accumulator, item, collection);
    });
    return accumulator;
  }
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(item) {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return myMap(myKeys(object), function(key) {
      return object[key];
    });
  }
  function myReduce(collection, callback, acc) {
    let accumulator = acc !== undefined ? acc : (Array.isArray(collection) ? collection[0] : collection[Object.keys(collection)[0]]);
    let start = acc !== undefined ? 0 : 1;
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = start; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
}
  