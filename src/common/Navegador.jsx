import"./nav.css"
import { NavLink } from "react-router-dom"
const Navegador = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <i className="bi bi-youtube text-danger me-2"></i>YOUMUSIC
      </a>

      <div className="d-none d-md-block">
        <form className="d-flex" role="search" id="formularioBuscar">
          <input className="form-control me-2" type="search" placeholder="¿Qué quieres escuchar?" aria-label="Search" id="inputBuscar" />
          <button className="btn btn-outline-danger" type="submit">Refresh</button>
        </form>
      </div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/pages/administrador.html" id="mostrarAdmin" style={{ display: "none" }}>Administrador</a>
          </li>

          <li className="nav-item dropdown" id="loginDropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Ingresá
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalLogin">Iniciar Sesión</a>
              </li>
              <li>
                <a className="dropdown-item" href="/pages/registro.html">Registrarse</a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
           <NavLink className={"nav-link"}  end to={"/admin"}>Nosotros</NavLink>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./index.html">
              <i className="bi bi-house text-danger"></i>
            </a>
          </li>

          <li className="nav-item">
            <i className="bi bi-gear-fill text-danger nav-link"></i>
          </li>

          <li className="nav-item">
            <i className="bi bi-person-circle text-danger nav-link"></i>
          </li>

          <li className="nav-item d-none" id="logoutItem">
            <button id="logoutButton" className="btn btn-outline-danger">Cerrar Sesión</button>
          </li>
        </ul>
      </div>

      <div className="d-block d-md-none mt-2">
        <form className="d-flex" role="search" id="formularioBuscar">
          <input className="form-control me-2" type="search" placeholder="¿Qué quieres escuchar?" aria-label="Search" />
          <button className="btn btn-outline-danger" type="submit">Refresh</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navegador
