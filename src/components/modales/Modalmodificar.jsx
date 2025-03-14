import { useForm } from "react-hook-form"
import { modificarCancion } from "../helpers/queries";
export const Modalmodificar=({setLista,id})=>{
    const idAdmin=id
    console.log(idAdmin)
     const { register, handleSubmit ,formState:{errors}} = useForm();
    const modificar=(data)=>{
      let objecancion={
        artistaGrupo:data.artistaGrupo,
        genero:data.genero,
        titulo:data.titulo,
        img:data.img,
        info:data.info,
        cancion:data.cancion,
        id:idAdmin

        
       }
       
       modificacionApi(objecancion,idAdmin)
       location.reload()
    }
    const modificacionApi=async(objecancion,id)=>{
        try{
            const response=await (modificarCancion(objecancion,id))
            if(response.status===200){
                const actulizar=await response.json()
                setLista(actulizar)
            }
        }catch{
            console.error("error al modificar")
        }
       
    }
    return(
        <>
        <div
        className="modal fade"
        id="modalLogin2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-black bg-gradient text-white">
              <h2 className="modal-title fs-5" id="ModalAdminCancionesLabel">
            Modifique Sus Canciones
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(modificar)} id="formularioCanciones">
                <div className="mb-3">
                  <label htmlFor="Grupo" className="form-label">Grupo/Artista*</label>
                  <input
                    type="text"
                    className="form-control border border-3 border-info-subtle"
                    id="Grupo"
                    placeholder="Las Pastillas del Abuelo"
                    required
                    {...register("artistaGrupo", { minLength: 3 })}
                  />
                  {errors.artistaGrupo && (
                    <div className="invalid-feedback">Escribe el nombre completo, debe contener más de 3 carácteres</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="Categoria" className="form-label">Género*</label>
                  <input
                    type="text"
                    className="form-control border border-3 border-info-subtle"
                    id="Categoria"
                    placeholder="Rock"
                    required
                    {...register("genero", { minLength: 3 })}
                  />
                  {errors.genero && (
                    <div className="invalid-feedback">Escribe un género completo, debe contener más de 3 carácteres</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="Titulo" className="form-label">Título*</label>
                  <input
                    type="text"
                    className="form-control border border-3 border-info-subtle"
                    id="Titulo"
                    placeholder="¿Qué es Dios?"
                    required
                    {...register("titulo", { minLength: 3 })}
                  />
                  {errors.titulo && (
                    <div className="invalid-feedback">Escribe el nombre completo, debe contener más de 3 carácteres</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="Imagen" className="form-label">Imagen (Url)*</label>
                  <input
                    type="text"
                    className="form-control border border-3 border-info-subtle"
                    id="Imagen"
                    minLength="6"
                    maxLength="100"
                    placeholder="Url"
                    required
                    {...register("img", { minLength: 6 })}
                  />
                  {errors.img && (
                    <div className="invalid-feedback">La URL de la imagen debe tener al menos 6 caracteres</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Info de la canción</label>
                  <textarea
                    name="text"
                    className="form-control border-3 border-info-subtle"
                    {...register("info")}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Cancion" className="form-label">Canción (Url MP3)*</label>
                  <input
                    type="url"
                    className="form-control border border-3 border-info-subtle"
                    id="Cancion"
                    minLength="6"
                    maxLength="100"
                    placeholder="url MP3"
                    required
                    {...register("cancion", { minLength: 6 })}
                  />
                  {errors.cancion && (
                    <div className="invalid-feedback">La URL de la canción debe tener al menos 6 caracteres</div>
                  )}
                </div>

                <div className="modal-footer mt-3">
                  <div className="text-end">
                    <button className="btn btn-outline-success" type="submit" id="btnFormulario">
                      Agregar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}