import React from "react";
import { useHistory } from "react-router-dom";
import auth from "../Home&Login/auth";
import "./ListPlay.css";



function validar(e, history){
  if (document.getElementById("input-list").value.length > 0){ 
     auth.login(() => {
       history.push("/playlist")
     })
  }

  else {
    e.preventDefault()
    alert("Rellenar los campos")

  }
}

function PlayListTable() {
  const history = useHistory()
  return (
  
    <div className="content-list">
      <form name="listado" onSubmit={(e) => validar(e, history)}>
      <input
        type="text"
        id="input-list"
        placeholder="  Buscar "
        className="input-table"
      ></input>
      <button className="btn-list" type="submit"></button>
      </form>

      <div className="table-list">
        <table>
          <p className="text-table">Resultados</p>
          <tr className="elem-table">
            <th>Nombre</th>
            <th>Artista</th>
            <th className="eliminar-mob">Álbum</th>
            <th className="eliminar-mob">Duración</th>
            <th>Agregar</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <div className="linea"></div>
        <p className="text-search"><span className="eliminar-mob">No hay resultados</span> utiliza la barra de búsqueda para encontrar canciones</p>
      </div>

      <div className="table-list-two">
        <table className="table-two">
          <p className="text-table-two">Tu Playlist</p>
          <tr>
            <th>Nombre</th>
            <th>Artista</th>
            <th className="eliminar-mob">Duración</th>
            <th className="eliminar-mob">Cant.Votos</th>
            <th>Votar</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        
        <div className="linea"></div>
        <div className="div-mob">
        <p className="text-search-two">UPS!, TU PLAYLIST AÚN ESTÁ VACÍA</p>
        <p className="text-search-two-l">Comienza a agregar canciones</p>
        </div>
      </div>
    </div>
  );
}

export default PlayListTable;
