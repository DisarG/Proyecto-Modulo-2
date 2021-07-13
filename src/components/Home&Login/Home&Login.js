import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/header";
import auth from "./auth";
import "./Home&Login.css";

function validar(e, history){
  if (document.getElementById("input-email").value.length > 0
     && document.getElementById("input-pass").value.length > 0){ 
     auth.login(() => {
       history.push("/playlistblank")
     })
  }

  else {
    e.preventDefault()
    alert("Rellenar los campos")

  }
}

function HomeLogin () {
  const history = useHistory()
  return (
    <>
      <Header />
      <div className="container">
        <img
          className="candado-home"
          alt="candado"
          src="https://www.figma.com/file/nMX6u7H0w9PIUBqC9RzZJc/image/8a71e35f9cf8575bf66c5dde51aedb438d4de70b?fuid=967493902892911714"
        ></img>
        <h1 className="title-l">Ingresar</h1>
        <form onSubmit={(e) => validar(e, history)} className="formulario" name="form" id="form">
          <input
            id="input-email"
            type="text"
            name="email"
            className="input-l"
            placeholder="Correo Electronico"
          ></input>
          <input
            id="input-pass"
            type="text"
            name="pass"
            className="input-l"
            placeholder="Contraseña"
          ></input>
          <button
            href=""
            className="btn-playlist"
            type="submit"
          >
            COMENZAR A CREAR PLAYLISTS
          </button>
          <a href="" className="pass">
            ¿Has OLVIDADO LA CONTRASEÑA?
          </a>

          <div className="line-home"></div>
          <a href="" className="acc">
            ¿NO TIENES CUENTA?
          </a>
          <a href="" className="btn-reg">
            REGISTRATE
          </a>
        </form>
      </div>
    </>
  );
}

export default HomeLogin;

