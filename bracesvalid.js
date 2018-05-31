function bracesValid(str){
    var lastOpen = []
    for (var i = 0; i<str.length;i++){
        if (str[i] == '{' || str[i] == '(' || str[i] == '['){
            lastOpen.push(str[i]);
        }
        else if (str[i] == '}'){
            if (lastOpen.length<1){
                return false;
            }
            else if ('{' == lastOpen[lastOpen.length-1] ){
                lastOpen.pop()
            }
            else {
                return false;
            }
        }
        else if (str[i] == ')'){
            if (lastOpen.length<1){
                return false;
            }
            else if ( '('== lastOpen[lastOpen.length-1] ){
                lastOpen.pop()
            }
            else {
                return false;
            }
        }
        else if (str[i] == ']'){
            if (lastOpen.length<1){
                return false;
            }
            else if ( '[' == lastOpen[lastOpen.length-1] ){
                lastOpen.pop()
            }
            else {
                return false;
            }
        }
    }
    return true;
}

console.log(bracesValid('apples'));
console.log(bracesValid('(ap[p]le{s})'));
console.log(bracesValid('apple]s'));
console.log(bracesValid('appl[e(])s'));