function CreateObject(arr) {
    // Write your code here
    let infoObject = {};
    for(let i = 0; i < arr.length; i += 2){
        infoObject[arr[i]] = arr[i+1]
    }
    return infoObject
    
}

module.exports = CreateObject;
