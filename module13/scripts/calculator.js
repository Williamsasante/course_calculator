function input(x){

   if(document.getElementById('result').value ==0){
    document.getElementById('result').value = x;
   }
   else{
    document.getElementById('result').value += x;
   }

}

function allclear(){
    document.getElementById('result').value = 0;
}

function plusminus(){
     let x = parseFloat(document.getElementById('result').value);

     x *= -1;
     document.getElementById('result').value = x;
}

function percent(){
    let x = parseFloat(document.getElementById('result').value);

     x *= 0.01;
     document.getElementById('result').value = x;

}

function square(){
    let x = parseFloat(document.getElementById('result').value);

     x *= x;
     document.getElementById('result').value = x;
}