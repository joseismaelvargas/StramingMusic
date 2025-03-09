import"./nav.css"
import { NavLink ,Link} from "react-router-dom"
const Navegador = ({logeado}) => {
  return (

    <nav className="navegador navbar navbar-expand-lg bg-body-black color-white">
    <div className="container-fluid">
      <a className="navbar-brand" href="./">
        <i className="bi bi-youtube  text-danger me-2">YOUMUSIC</i>
      </a>

      <div className="d-none d-md-block">
        <form className="d-flex" role="search" id="formularioBuscar">
          <input className="form-control me-2" type="search" placeholder="¿Qué quieres escuchar?" aria-label="Search" id="inputBuscar" />
          <button className="btn btn-outline-danger" type="submit">Refresh</button>
        </form>
      </div>

      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon  "></span>
      </button>

      <div className=" item-logos collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/pages/administrador.html" id="mostrarAdmin" style={{ display: "none" }}>Administrador</a>
          </li>

          <li className="nav-link dropdown" id="loginDropdown">
             <i className="bi bi-person-circle text-danger nav-link" role="button"data-bs-toggle="dropdown" href="#"></i>
            <ul className="dropdown-menu bg-body-black">
              <li>
                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalLogin">Iniciar Sesión</a>
              </li>
              <li className="nav-item">
             <NavLink className={"nav-error"} end to ={"/error"}>Registrarse</NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-link">
           <NavLink className={"nav-link"}  end to={"/nosotros"}><i class="bi bi-emoji-smile-fill text-danger"></i></NavLink>
          </li>
          {
            logeado.length>0?<li className="nav-link">
          <Link className="" end to={"/admin"}>
             <i className="bi bi-gear-fill text-danger nav-link"></i>     </Link>

          </li>:null
          }
          

          <li className="nav-link">
     
            <Link className="nav-link" end to ={"/"}>   <i className="bi bi-house text-danger"></i></Link>
           

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
