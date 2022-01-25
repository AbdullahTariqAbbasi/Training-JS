function clickHello()
{
    var varScope = 'global';
    alert(getVariableScope());
    alert(getSum());
    alert(compareValues());
}

//Assignment & Assignment & Typeof & Logical Operators
function getSum()
{
    var a = 10;
    var sum;
    if(typeof a == 'number')
    {
        sum = a + a;
        sum -= a;
    }
    return sum;
}

//Variable Scopes
function getVariableScope()
{
    var varScope = 'local';
    return varScope;
}

//Conditional & Comparison & Bitwise Operators
function compareValues()
{
    var a = 10;
    var b = 20;
    return a == b ? ~a : ~b;
}