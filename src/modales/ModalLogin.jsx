import "./modal.css"
export const ModalLogin=()=>{
    return(
        <>
        <div
      className="modal fade"
      id="modalLogin"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Login</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="w-50 ms-3" id="ingresarFormulario">
              <div className="mb-3">
                <label for="loginEmail" className="form-label"
                  >Correo Electrónico</label
                >
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="loginPassword" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  required
                />
              </div>
            <button
                  type="button"
                  className="btn btn-light w-100 mb-2"
                  
                >
                  <img
                    src="./img/google-icon.svg"
                    alt="Google Icon"
                    className="tamañoLogoGyF me-2"
                  />
                  Iniciar con Google
                </button>
              <a href="/pages/error404.html"
                ><button type="button" className="btn btn-primary w-100 mb-2">
                  <img
                    src="./img/facebook-icon.svg"
                    alt="facebook-icon"
                    className="tamañoLogoGyF me-2"
                  />
                  Iniciar con Facebook
                </button></a
              >

              

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-success">Iniciar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}