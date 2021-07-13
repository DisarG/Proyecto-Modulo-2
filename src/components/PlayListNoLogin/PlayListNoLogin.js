import React from "react";
import Header from "../Header/header";
import './NoLogin.css'

function NoLogin() {
  return (
    <>
         <Header />
      <div className="content">
          <img className="candado-error" alt="candado" src="https://www.figma.com/file/nMX6u7H0w9PIUBqC9RzZJc/image/8a71e35f9cf8575bf66c5dde51aedb438d4de70b?fuid=967493902892911714"></img>
          <div className="container-NoLog">
          <h1 className="text-error"><span className="error-mmm">Mmm...</span> algo no salió bien</h1>
          <p className="text-auth">Debes estar autenticado para acceder a esta pagina</p>
          </div>
      </div>
    </>
  );
}

export default NoLogin;
