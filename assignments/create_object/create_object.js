function CreateObject(arr) {
//     Write your code here
// <<<<<<< CanDrive
    let infoObject = {};
    for(let i = 0; i < arr.length; i += 2){
        infoObject[arr[i]] = arr[i+1]
    }
    return infoObject
    
// =======
    infoObject = {}
    len = arr.length
    for(let i = 0; i < len; i += 2){
        infoObject[arr[i]] = arr[i+1]
    }
    return infoObject
// >>>>>>> master
}

module.exports = CreateObject;
