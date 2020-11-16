function reset(){
    document.getElementById("answer").innerHTML = '0';
}

function removeZero(){
    
    var value = document.getElementById("answer").innerHTML;
    if (value == "0") {
            value = " "
            document.getElementById("answer").innerHTML = value;
    }

}

function display(value){
    removeZero();
    document.getElementById("answer").innerHTML += value;
}

function enter(){
    removeZero();
    var answer= document.getElementById("answer").innerHTML;
    try {
        if(answer.includes("/0")){
            document.getElementById("answer").innerHTML = "Can't Divide By 0";
        }

        else{
            var solve = eval(answer);
            document.getElementById("answer").innerHTML = solve;
        }
        
    } catch (error) {
        document.getElementById("answer").innerHTML = "ERROR Failed Equation";
    }
    
}   
