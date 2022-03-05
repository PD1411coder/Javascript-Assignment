function CreateObject(arr) {
    // Write your code here
    infoObject = {}
    len = arr.length
    for(let i = 0; i < len; i += 2){
        infoObject[arr[i]] = arr[i+1]
    }
    return infoObject
}

module.exports = CreateObject;
