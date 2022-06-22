function    sendForm (){
var variable = document.getElementById('password').value;
if (variable.length ==0 || /^\s+$/.test(variable)){
    alert('debes llennarlo')
    return false;
}
return true;
}
function azar(){
    rand  = Math.floor(Math.random()*33);
    document.getElementById("random").innerHTML = rand;
var data =$("#apuesta").val();

document.getElementById("apostado").innerHTML = data;
if(data == rand){
    document.getElementById("acertado").innerHTML = "Has acertado";
    alert('Has ganado!:');
}else{
    document.getElementById("acertado").innerHTML = "No has acertado";
}
    if (rand % 2 ==0) {
    document.getElementById('premio').innerHTML = "Rojo , Ha salido par";
} else {
    document.getElementById('premio').innerHTML = "Negro , Ha salido impar";
}
if (rand ==0) {
    document.getElementById('premio').innerHTML = "Ha salido 0";
}
}
