//  Function Declarations
// يمكن استدعاء قبل كتابة 

function testOneDeclarations() {
    return 1;
}

console.log(testOneDeclarations())


function testTwoDeclarations(param) {
    return param * 2;
}

console.log(testTwoDeclarations(5))


function testThreeDeclarations(paramOne, paramTwo) {
    return paramOne * paramTwo;
}

console.log(testThreeDeclarations(5, 4))


//  Function Expressions
// يجب كتابة قبل الاستدعاء 

let testOneExpressions = function () {
    return 1;
}

console.log(testOneExpressions())


let testTwoExpressions = function (param) {
    return param * 2;
}

console.log(testTwoExpressions(5))


let testThreeExpressions = function (paramOne, paramTwo) {
    return paramOne * paramTwo;
}

console.log(testThreeExpressions(5, 4))


// Arrow Functions
// يجب كتابة قبل الاستدعاء 

let testOneArrow = _ => 1;

console.log(testOneArrow());


let testTwoArrow = param => param * 2;

console.log(testTwoArrow(5));


let testThreeArrow = (paramOne, paramTwo) => paramOne * paramTwo;

console.log(testThreeArrow(5, 4));


//  anonymous functions
// تكتب بدون اسم وتعود الي المتغير
// الاستخدام: تُستخدم غالبًا كدوال رد نداء callback functions أو في الأماكن التي لا تحتاج فيها إلى إعادة استخدام الدالة.

let testAnonymous = function () {
    return 1;
}

let test = testAnonymous;

console.log(test());
