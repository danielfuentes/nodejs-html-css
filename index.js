const express = require('express');
const path = require('path');
const app = express();


//MIDDLEWARE
app.use(express.static('public'));

app.set('puerto', process.env.PORT || 3001);


//----- RUTAS -----
app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/registro', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/registro.html'));
})

app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));


