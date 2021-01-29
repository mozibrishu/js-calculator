let firstValue = null;
let secondValue = null;
let result = null;
let mainOperator = null;

function digitHandler(digit){
    let currentScreen = getScreen();
    if(isOnlyDigitZero(currentScreen)){
        setScreen(digit);
    }
    else{
        setScreen(currentScreen + digit);
    }    
}

function isOnlyDigitZero(currentScreen){
    if(currentScreen[0] == '0' && currentScreen.length == 1){
        return true;
    }
    else{
        return false
    }
}

function operatorHandler(operator){
    firstValue = parseFloat(getScreen());
    setScreen(operator);
    mainOperator = operator;
}

function equalHandler(){
    secondValue = parseFloat(getScreen());
    result = calculateValue();
    setScreen(result);
}

function calculateValue(){
    if(mainOperator != null && firstValue !=null && secondValue !=null){
        switch(mainOperator){
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
        }
    }
}

function dotHandler(dot){
    let currentScreen = getScreen();
    if(!(isAlreadyDot(currentScreen))){
        setScreen(currentScreen + dot);
    }
}


function isAlreadyDot(currentScreen){
    for(let i = 0; i<currentScreen.length; i++){
        if(currentScreen[i] == '.'){
            return true;
        }
    }
    return false;
}


// Get Set Method
function getScreen() {
    return document.getElementById("display").innerText;
}
function setScreen(value) {
    document.getElementById("display").innerText = value;
}