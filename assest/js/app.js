// con esto lo que vamos hacer es cambiar nuestro h1 el contenido por el que se le da en inner despues de 3 seg
setTimeout( ()=>{
    document.getElementById('title')
    .innerHTML = 'JavaScript & Express';
},3000);