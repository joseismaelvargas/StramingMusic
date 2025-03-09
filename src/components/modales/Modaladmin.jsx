import React from 'react'

const Modaladmin = () => {
  return (
  
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
          <div className="modal-header bg-black bg-gradient text-white">
            <h2 className="modal-title fs-5" id="ModalAdminCancionesLabel">
              Agregue/Modifique Sus Canciones
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="formularioCanciones">
              <div className="mb-3">
                <label for="Grupo" className="form-label">Grupo/Artista*</label>
                <input
                  type="text"
                  className="form-control border border-3 border-info-subtle"
                  id="Grupo"
                  placeholder="Las Pastillas del Abuelo"
                  required
                />
                <div className="invalid-feedback">Escribe el nombre completo, debe contener mas de 3 carácteres</div>
              </div>
              <div className="mb-3">
                <label for="Categoria" className="form-label">Género*</label>
                <input
                  type="text"
                  className="form-control border border-3 border-info-subtle"
                  id="Categoria"
                  placeholder="Rock"
                  required
                />
                <div className="invalid-feedback">Escribe un género completo, debe contener mas de 3 carácteres </div>
              </div>
              <div className="mb-3">
                <label for="Titulo" className="form-label">Titulo*</label>
                <input
                  type="text"
                  className="form-control border border-3 border-info-subtle"
                  id="Titulo"
                  placeholder="¿Que es Dios?"
                  required
                />
                <div className="invalid-feedback">Escribe el nombre completo, debe contener mas de 3 carácteres</div>
              </div>
              <div className="mb-3">
                <label for="Imagen" className="form-label">Imagen( Url )*</label>
                <input
                  type="text"
                  className="form-control border border-3 border-info-subtle"
                  id="Imagen"
                  minlength="6"
                  maxlength="100"
                  placeholder="Url"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="Duracion" className="form-label">Duracion*</label>
                <input
                  type="text"
                  className="form-control border border-3 border-info-subtle"
                  id="Duracion"
                  minlength="1"
                  maxlength="100"
                  placeholder="3:40"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="Cancion" className="form-label"
                  >Cancion( Url ) (MP3)*</label
                >
                <input
                  type="url"
                  className="form-control border border-3 border-info-subtle"
                  id="Cancion"
                  minlength="6"
                  maxlength="100"
                  placeholder="url MP3"
                  required
                />
              </div>

              <div className="modal-footer mt-3">
                <div className="text-end">
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    id="btnFormulario"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modaladmin
