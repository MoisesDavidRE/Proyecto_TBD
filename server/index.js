const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"david",
    password:"1234",
    database:"acuario"
});

app.post("/create",(req, res)=>{
    const nombre = req.body.nombre;
    const apellidoPaterno = req.body.apellidoPaterno;
    const apellidoMaterno = req.body.apellidoMaterno;
    const nombreUsuario = req.body.nombreUsuario;
    const contrasenia = req.body.contrasenia;
    const perfil = req.body.perfil;
    const correo = req.body.correo;
    const fechaNacimiento = req.body.fechaNacimiento;
    const comentarios = req.body.comentarios;
    const foto = req.body.foto;

    db.query('INSERT INTO usuario (nombre, apellido_Paterno, apellido_Materno, nombreUsuario, contrasenia, perfilUsuario, correoElectronico, fechaNacimiento, comentarioPreferencias, imagenUsuario) VALUES (?,?,?,?,?,?,?,?,?,?)'
    ,[nombre,apellidoPaterno,apellidoMaterno,nombreUsuario,contrasenia,perfil,correo,fechaNacimiento,comentarios,foto],
    (err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send("Usuario registrado con éxito");
        }
    });
});
app.listen(3001,()=>{
    console.log("¿Qué pató cua cuaaa? Corriendo en el puerto 3001 papilord 😎")
})
