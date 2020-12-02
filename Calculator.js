var num = 0;
var oper = "*";
//var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", ""];
var numList = [];
var operList = [];
var operand = ["",""];
var numListValue = 0;

$('#zero').click(function(){
    $("#displayNumber").text("0");
    numListValue = (numListValue * 10) + 0;
    $('#displayNumber').text(numListValue);
    // while ("#displayNumber" != operList) {
    //     numListValue = numListValue + "0";
    // }

    // numList.push(0);
});

$('#one').click(function(){
    $("#displayNumber").text("1");
    numListValue = (numListValue * 10) + 1;
    $('#displayNumber').text(numListValue);
    // numList.push(1);    
});

$('#two').click(function(){
    $("#displayNumber").text("2");
    numListValue = (numListValue * 10) + 2;
    $('#displayNumber').text(numListValue);
    // numList.push(2);
});

$('#three').click(function(){
    $("#displayNumber").text("3");
    numListValue =(numListValue * 10 ) + 3;
    $('#displayNumber').text(numListValue);
    // numList.push(numListValue);
});

$('#four').click(function(){
    $("#displayNumber").text("4");
    numListValue = (numListValue * 10) + 4;
    $('#displayNumber').text(numListValue);
    // numList.push(4);
});

$('#five').click(function(){
    $("#displayNumber").text("5");
    numListValue = (numListValue * 10) + 5;
    $('#displayNumber').text(numListValue);
    // numList.push(numListValue);
});

$('#six').click(function(){
    $("#displayNumber").text("6");
    numListValue = (numListValue * 10) + 6;
    $('#displayNumber').text(numListValue);
    // numList.push(6);
});

$('#seven').click(function(){
    $("#displayNumber").text("7");
    numListValue = (numListValue * 10) + 7;
    $('#displayNumber').text(numListValue);
    // numList.push(7);
});

$('#eight').click(function(){
    $("#displayNumber").text("8");
    numListValue = (numListValue * 10) + 8;
    $('#displayNumber').text(numListValue);
    //numList.push(8);
});

$('#nine').click(function(){
    //$("#displayNumber").text("9");
    numListValue = (numListValue * 10) + 9;
    $('#displayNumber').text(numListValue);
    // numList.push(9);
});

$('#plus').click(function(){
    $("#displayNumber").text("+");
    numList.push(numListValue);
    operList.push('+');
    numListValue= 0;
});

$('#minus').click(function(){
    $("#displayNumber").text("-");
    numList.push(numListValue);
    operList.push('-');
    numListValue = 0;
});

$('#multiply').click(function(){
    $("#displayNumber").text("*");
    numList.push(numListValue);
    operList.push('*');
    numListValue = 0;
});

$('#divide').click(function(){
    $("#displayNumber").text("/");
    numList.push(numListValue);
    operList.push('/');
    numListValue = 0;
});

$('#power').click(function(){
    $("#power").text("^");
    numList.push(numListValue);
    operList.push('^');
    numListValue = 0;
});

$('#decimal').click(function(){
    $("#displayNumber").text(".");
    numList.push('.');
});

$('#clear').click(function(){
    $("#displayNumber").text("");
    numList= [];
    operList = [];
    numListValue = "";
});

$('#result').click(function(){
    numList.push(numListValue);
    numListValue = 0;
    var result = 0;
    var num1;
    var num2;
    var oper;
    alert("numList.length= " + numList.length + "operList.length= "+operList.length);
    // get everything out using a while loop
    while (numList.length != 0 && operList.length != 0) {
        num1 = numList[numList.length-1];
        alert("num1="+num1);
        numList.pop();
        num2 = numList[numList.length-1];
        alert("num2="+num2);
        numList.pop();
        oper = operList[operList.length-1];
        alert("oper="+oper);
        operList.pop();
        alert("num1="+num1+" num2="+num2+" oper="+oper);
        if (oper === '+'){
            result = num1 + num2;
            numList.push(result);
            // alert(numList);
        } else if (oper === '-') {
            if (num1 >= num2) {
                result = num2 - num1;
                numList.push(result);
                // alert(result);
                alert("num1 >= num2");
            } else if (num1 <= num2) {
                result = num2 - num1;
                numList.push(result);
                //alert(result);
                alert("num1 <= num2");
            } else if (num1 == num2) {
                result = num1 - num2;
                numList.push(result);
                alert(result);
            }
            // result = num1 - num2;
            // numList.push(result);
            // alert(result);
        } else if (oper === '*') {
            result = num1 * num2;
            numList.push(result);
            alert(result);
        } else if (oper === '/') {
            if (num1 >= num2) {
                result = num2 / num1;
                numList.push(result);
                // alert(result);
                alert("num1 >= num2");
            } else if (num1 <= num2) {
                result = num2 / num1;
                numList.push(result);
                //alert(result);
                alert("num1 <= num2");
            } else if (num1 == num2) {
                result = num1 / num2;
                numList.push(result);
                alert(result);
            }
            // result = num1 / num2;
            // numList.push(result);
            // alert(result);
        } else if (oper === '^') {
            if (num1 >= num2) {
                result = Math.pow(num2, num1);
                numList.push(result);
                alert(result);
            } 
            else if (num2 >= num1) {
                result = Math.pow(num2, num1);
                numList.push(result);
                alert(result);
            } 
            else if (num1 == num2) {
                result = Math.pow(num1, num2);
                numList.push(result);
                alert(result);
            }
            // result = Math.pow(num1, num2);
            // result.push(num1);
            // numList.push(result);
            // alert(result);
        }
    }
    result = numList[0];
    alert("Final result = " + result);
    $("#displayNumber").text(result);

    //alert(result);
    $("#displayNumber").text(result);
});