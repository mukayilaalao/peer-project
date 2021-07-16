let operators = ["add","divide","multiply","modulo","soustract"];
let calculator = {
    add : function(a,b) {
        return a+b;
    },
    divide : function(a,b) {
        return a/b;
    },
    soustract : function(a,b) {
        return a-b;
    },
    multiply : function(a,b) {
        return a*b;
    },
    modulo : function(a,b) {
        return a%b;
    }
}
let operator = argv[2];
while (!operators.includes(operator)) {
    console.log("please enter a valid operator!");
}