var list= document.getElementById('list-buzz');
for (var i=1;i<=100;i++){
    if(i % 15 == 0){
        list.innerHTML += '<li>'+'fizzBuzz'+'</li>'; 
    }else if (i % 5 == 0){
        list.innerHTML += '<li>'+'Buzz'+'</li>'; 
    }else if (i % 3 == 0) {
        list.innerHTML += '<li>'+'Fizz'+'</li>'; 
    }else{
        list.innerHTML += '<li>'+i+'</li>'; 
    }
}