const express = require('express');
const route = express.Router();
//const server = express();

//setting 

//server.set('view engine','ejs');

// haciendo lo mismo que all() que lo hace para una ruta especifica pero con esto podemos hacerlo para culquier ruta 

/* function logger(req,res,next){
    console.log('REQUEST RECEIVED');
    console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl  }`);
    next();
    }; */


// para que express pueda leer los json
route.use(express.json());

// un metodo de express all() es una funcion previa antes de pasar a la ruta en este caso la raiz pero se pude hacer atraves de un middleware o funcion

/* route.all('/',(req,res,next) =>{
    console.log('All Pased');
    next();
}); */

//route.use(logger);

 route.get('/',(req,res) => {
    //res.status = 200;
    //res.setHeader('Content-Type','text/plain');
    // sepongamos que queremos hacerle una consulta a la BD y le return data iria aca 
    const data = [{name:'jhon'},{name:'joe'},{name:'cameron'},{name:'cedric'}];
    res.render('index.ejs', {people: data});
    
});
 


route.get('/home',(req,res)=>{
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World!! from nodejs');
});

route.get('/login',(req,res)=>{
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Aca va el login!!!');
});

route.get('/about',(req,res)=>{
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Aca va el About!!!');
});

// method request

route.post('/post/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params);   
    res.send('REQUEST POST RECIVIDED');
});

route.put('/put/:id',(req,res)=>{
    console.log(req.body);
    res.send(`User ${req.params.id} update`);
});

route.delete('/delete/:userId',(req,res)=>{
    res.send(`User ${req.params.userId} deleted`);
});



module.exports =  route;