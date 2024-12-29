function buttonClick(val){
    document.getElementById("selected").value+=val;
}
function clearDisplay(){
    document.getElementById("selected").value = '';
}
function equalClick(){
    var text = document.getElementById("selected").value;
    if(text){
    var result = eval(text);  // perform calculation using built in function eval()
    document.getElementById("selected").value = result;
    }
}