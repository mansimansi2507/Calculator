function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
} 
function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
}
function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}
function Delete(){
    var n=document.getElementById('res').value;
    document.getElementById('res').value=n.slice(0,n.length-1);

}