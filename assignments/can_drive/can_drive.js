function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence == true){
        if(isTired == false && isSober ==true){
            return "You can drive"
        }
        if(isTired == true || isSober == false){
            return "You shouldn't drive"
        }
    }
    if(hasDrivingLiscence == false){
        return "You cannot drive"
    }
}
module.exports = CanDrive;
