// de eta forma cramos unserver con node sin el framework express
/*const http =require('http');

const server = http.createServer((req,res)=>{
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World!! from nodejs');
});

server.listen(3000,()=>{
    console.log('Server On Port 3000');
    
});*/
// fin del server en node 

// servidor con express 

const express = require('express');
const server = express();
const route = require('./route');
const morgan = require('morgan');

//setting 
server.set('nameapp','CeeM Express Tutorial');
server.set('port',3000);
server.set('view egine', 'ejs');

server.use(morgan('dev'));

// route 
//server.get('/', (req,res)=>{
//res.send('Hello World from express!!!');
//});

server.use(route);

// aca  le estamos especeficando el uso fijo de una ruta o carpeta 
route.use(express.static('assest'));

route.get('*',(req,res)=>{
    //res.status = 404;
    res.setHeader('Content-Type','text/plain');
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('NOT FOUND THIS URL');
});

// otro middleware que viene con express en este caso es para enviar desde el server docuemt static como html css js 



server.listen(server.get('port'),()=>{
    console.log(server.get('nameapp'));
    console.log('Server On Port',server.get('port'));
    
});