console.clear();
//importar el modulo de express web server
let express = require('express');

//importar el modulo de msql
let mysql = require('mysql');

//definir una coneccion con mysql
let con = mysql.createConnection({
    host:     'localhost', 
    user:     'root',
    password: '',
    database: 'shopdb'
});

//conecar con la database
con.connect( (error) => {
    if(error) throw error;
    console.log("Conectado a la DB");
});

//crear el web server
let app = express();

//encendemos el servidor
app.listen(3000,()=>{
    console.log('servidor encendido ');
});

//Datos


//rutas

app.get('/', (req,res) => {
    
    let comandoSQL = 'select * from compras';

    con.query(comandoSQL, (error, compras) => {
        
        let texto = "<ul>";

        for(compra of compras){
            texto = texto + "<li>" + compra.producto + " - Cantidad: " + compra.cantidad + "</li>";
        }//for

        texto = texto + "</ul>";

        res.send(texto);

    });//con.query


});//app.get 
