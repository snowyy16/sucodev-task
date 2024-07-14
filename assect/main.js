let tempNumber=""
// khi bam so
function numberClick(val){
    tempNumber=tempNumber + val;
    waitCalNumber=parseFloat(tempNumber)
    printResult(tempNumber);
}
// cho duoc tinh 
let waitCalNumber = 0;
// luu lai hanh hong
let tempAction = ''
let result=0;
// khi bam tinh toan

function actionClick(ac){
    // console.log("action:",ac)
    tempAction=ac
    result=waitCalNumber
    // clearAll()
    tempNumber=''
    
}
// DOM
const screenResult = document.getElementById('result-screen')
function printResult(res){
    screenResult.innerHTML=res
}

// thuc hien tinh toan khi bam dau bang 
function calculate(){
    console.log(waitCalNumber,tempAction,result)
    switch(tempAction){
        case "+":
            result = result+ waitCalNumber
            clearAll()
            printResult(result);
            break;

        case "-":
            result = result - waitCalNumber
            clearAll()
            printResult(result);
            break;
    

        case "*":
            result=result*waitCalNumber;
            clearAll()
            printResult(result)
            break;

        case "/":
            result = result / waitCalNumber
            if(){
                console.log(result)
                printResult("Nhap lai di")
                break;
            }
            clearAll()
            printResult(result);
            break;
    
    }
}
function clearAll(){
    screenResult.innerHTML="0"
    tempNumber = ''
}