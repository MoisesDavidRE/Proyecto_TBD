const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require("mysql");
const fs = require('fs')
const spawn = require('child_process').spawn


app.get("/export"), (req, res) => {
    const dumpFileName = `C:\\Users\\Moisés David\\Desktop\\.${Math.round(Date.now() / 1000)}.dump.sql`
    const writeStream = fs.createWriteStream(dumpFileName)

    process.chdir('C:\\Program Files\\MySQL\\MySQL Workbench 8.0');

    const dump = spawn('mysqldump', [
        '-u',
        'david',
        '-p1234',
        'acuario'
    ])
    dump
        .stdout
        .pipe(writeStream)
        .on('finish', function () {
            console.log('Completed')
        })
        .on('error', function (err) {
            console.log(err)
        })
}

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "david",
    password: "1234",
    database: "acuario"
});

app.post("/create", (req, res) => {
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
        , [nombre, apellidoPaterno, apellidoMaterno, nombreUsuario, contrasenia, perfil, correo, fechaNacimiento, comentarios, foto],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Usuario registrado con éxito");
            }
        });
});
app.listen(3001, () => {
    console.log("¿Qué pató cua cuaaa? Corriendo en el puerto 3001 papilord 😎")
})
