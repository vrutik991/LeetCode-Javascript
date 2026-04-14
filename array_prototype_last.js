/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    console.log(arr)
    if(arr.length < 1)
    {
        return -1
    }
    return arr[arr.length - 1]
};

const arr = [];
  console.log(arr.last()) // 3