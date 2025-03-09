import React from 'react'
import "../css/admin.css"
import Modaladmin from"../modales/Modaladmin.jsx"
export const Administrador = () => {
  return (
   <>
   <section className='section-admin ' >
  
   <h1 className="text-center text-success fw-light">
        Administra Tus Canciones
      </h1>  
     <button className="btn btn-outline-success "  href="#" data-bs-toggle="modal" data-bs-target="#modalLogin">
          <b>AGREGAR CANCION</b>
        </button>
      <hr />
      <div className="table-responsive mt-5 container">
        <table
          className="table table-hover table-bordered border-light text-center"
        >
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>GRUPO</th>
              <th>CATEGORIA</th>
              <th>TITULO</th>
              <th>CANCION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>

      {/* <section className="text-end my-5"> */}
       
      {/* </section> */}

      <hr />
   {/* modla */}
   <Modaladmin></Modaladmin>
    </section>
   </>
  )
}

export default Administrador
