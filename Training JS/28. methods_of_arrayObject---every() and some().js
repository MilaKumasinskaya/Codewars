function mirrorImage(arr){
    for(let i=0; i<arr.length-1; i++){
        if(isMirrorImage(arr[i], arr[i+1])){
            return [arr[i], arr[i+1]];
        }
    }
    return [-1, -1];
}

function isMirrorImage(num1, num2){
    let str1 = num1.toString();
    let str2 = num2.toString();
    return str1 === str2.split('').reverse().join('');
}
