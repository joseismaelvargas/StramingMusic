import "./modal.css"
import { logearAdmin } from "../helpers/queries"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
export const ModalLogin=()=>{
  const { register, handleSubmit ,formState:{errors},reset,setValue} = useForm();
    const Nav=useNavigate()

  const registere=(data)=>{
    console.log(data) 
     if(logearAdmin(data)){
      Nav("/admin")

     location.reload()
     }else{
      alert("No existe esta Cuenta")
     }
    }
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
            {/* Form */}
            <form className="w-50 ms-3" id="ingresarFormulario" onSubmit={handleSubmit(registere)} >
              <div className="mb-3">
                <label for="loginEmail" className="form-label"
                  >Correo Electrónico</label
                >
                <input
                  type="email"
                  className="form-control"
                   
                  required {...register("email",
                    {
                      required:"Agregue Email"
                    }
                  )}
                />
              </div>
              {errors.email&&<p>{errors.email.message}</p>}
              <div className="mb-3">
                <label for="loginPassword" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  required
                  {
                   ...register("pasword",{
                    required:"Agregue Contraseña"
                   })
                  }
                />
              </div>
              {errors.pasword&&<p>{errors.pasword.message}</p>}
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