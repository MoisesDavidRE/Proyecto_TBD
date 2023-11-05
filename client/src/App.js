import './App.css';
import { useState } from "react";
import Axios from "axios";


function App() {

  const [nombre, setNombre] = useState("")
  const [apellidoPaterno, setApellidoPaterno] = useState("")
  const [apellidoMaterno, setApellidoMaterno] = useState("")
  const [nombreUsuario, setNombreUsuario] = useState("")
  const [contrasenia, setContrasenia] = useState("")
  const [perfil, setPerfil] = useState("")
  const [correo, setCorreo] = useState("")
  const [fechaNacimiento, setFechaNacimiento] = useState("")
  const [comentarios, setComentarios] = useState("")
  const [foto, setFoto] = useState("")

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      apellidoPaterno: apellidoPaterno,
      apellidoMaterno: apellidoMaterno,
      nombreUsuario: nombreUsuario,
      contrasenia: contrasenia,
      perfil: perfil,
      correo: correo,
      fechaNacimiento: fechaNacimiento,
      comentarios: comentarios,
      foto: foto
    }).then(() => {
      alert("usuario registrado con éxito");
    })
  }

  return (
    <div className="App">
      <div className="datos">

        <label>Nombre:<input type="text"
          onChange={(event) => {
            setNombre(event.target.value)
          }}></input>
        </label><br />

        <label>Apellido Paterno:<input type="text"
          onChange={(event) => {
            setApellidoPaterno(event.target.value)
          }}></input>
        </label><br />

        <label>Apellido Materno:<input type="text"
          onChange={(event) => {
            setApellidoMaterno(event.target.value)
          }}></input>
        </label><br />

        <label>Nombre de usuario:<input type="text"
          onChange={(event) => {
            setNombreUsuario(event.target.value)
          }}></input>
        </label><br />

        <label>Contraseña de usuario:<input type="password"
          onChange={(event) => {
            setContrasenia(event.target.value)
          }}></input>
        </label><br />

        <label>Perfil de usuario:</label><br />

        <select
          onChange={event => {
            setPerfil(event.target.value)
          }}>
          <option default></option>
          <option disabled>ADMINISTRADOR</option>
          <option>CLIENTE</option>
        </select><br />

        <label>Correo electrónico:<input type="text"
          onChange={(event) => { setCorreo(event.target.value) }}></input>
        </label><br />
        <label>Fecha de nacimiento:<input type="date" id="fechaNacimiento"
          onChange={(event) => {
            setFechaNacimiento(event.target.value)
          }}
        ></input></label><br />
        <label>Comentarios adicionales:<input type="text"
          onChange={(event) => {
            setComentarios(event.target.value)
          }}></input></label><br />
        <label>Foto de perfil:<input type="text"
          onChange={(event) => {
            setFoto(event.target.value)
          }}
        ></input></label>
        <button onClick={add}>Registrar</button>
        <button>Exportar base de datos</button>

      </div>
    </div>
  );
}

export default App;
