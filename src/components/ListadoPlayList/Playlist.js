import React from "react";
import { useHistory } from "react-router-dom";
import auth from "../Home&Login/auth";
import "./ListPlay.css";
import { useState } from 'react';




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

function PlayListCreate() {
  const history = useHistory()
 
  const [list, setList] = useState([
    {
      id: 'a',
      name:'A las nueve',
      artista: 'NTVG',
      duracion: '3:24',
      votos: 4,
    },
    {
      id: 'b',
      name:'Maldicion',
      artista: 'Once tiros',
      duracion: '3:04',
      votos: 3,
    },
    {
      id: 'c',
      name: 'Cancion para uno',
      artista: 'La Vela Puerca',
      duracion: '2:53',
      votos: 2,
    },
    {
      id: 'd',
      name: 'Mi Revolucion',
      artista: 'Cuatro Pesos de Propina',
      duracion: '3:24',
      votos: 1,
    },
    {
      id: 'f',
      name: 'Lo mas simple de las cosas',
      artista: 'Hereford',
      duracion: '3:17',
      votos: 0,
    }
    
  ]);


  const updateVote = (editVote) => {
    const changeVote = list.map(listas => (
      listas.id === editVote.id 
      ? editVote 
      : listas
    ))
    setList(changeVote)
    
  }


  const sortedList = [...list].sort((b, a) => (a.votos > b.votos ? 1 : a.votos > b.votos ? -1 : 0))



  
  
  return (
  
    <div className="content-list">
      <input
        type="text"
        id="input-list"
        placeholder="  Buscar "
        className="input-table-c"
      ></input>
      
      <div className="table-list">
        <table className="table">
          <p className="text-table">Resultados</p>
          <tr className="elem-table">
            <th>Nombre</th>
            <th>Artista</th>
            <th className="eliminar-mob">Álbum</th>
            <th className="eliminar-mob">Duración</th>
            <th>Agregar</th>
          </tr>
          <tr>
            <td>A las nueve</td>
            <td>NTVG</td>
            <td className="eliminar-mob">El calor del pleno invierno</td>
            <td className="eliminar-mob">3:24</td>
            <button className="icon">  </button>
          </tr>
        </table>
       
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
          
          {sortedList.map(listas => (
              <tr>
                <td>{listas.name}</td>
                <td>{listas.artista}</td>
                <td className="eliminar-mob">{listas.duracion}</td>
                <td className="eliminar-mob" >{listas.votos}</td>
                <button className="like"   
                onClick={() => updateVote ({id: listas.id, name: listas.name,
               artista: listas.artista,duracion: listas.duracion, votos: listas.votos +1  })}>  </button> 
                <button className="icon-deslike eliminar-mob"               
                onClick={() => updateVote ({id: listas.id, name: listas.name,
               artista: listas.artista, duracion: listas.duracion, votos: listas.votos -1  })}></button>
              </tr> 
          ))
          } 
        </table>
        

      </div>
    </div>
  );
}

export default PlayListCreate;
