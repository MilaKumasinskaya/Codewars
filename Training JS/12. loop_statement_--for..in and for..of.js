function giveMeFive(obj){
    //coding here
    let five = [];
    for (key in obj) {

        if(key.length === 5){
            five.push(key)
        }
        if(obj[key].length === 5){
            five.push(obj[key])
        }
    }
    return five;
}