import React, { useEffect } from 'react'
import "../css/admin.css"
import Modaladmin from"../modales/Modaladmin.jsx"
import { URL_musica } from '../helpers/queries.js'
import { useState } from 'react'
import { borrarCancion } from '../helpers/queries.js'
export const Administrador = () => {
  const[lista,setLista]=useState([])

  const Apimusic=async()=>{
    try{
 const response=await(fetch (URL_musica))
      console.log(response)
    if(response.status===200){
      const datos=await response.json()
     console.log(datos)
      setLista(datos)
    }

    }catch{
     console.log("Error en la solicitud")
    }
   

  }
  const eliminar=async (id)=>{
 try{
   const response=await borrarCancion(id)
   if(response.status===200){
    const actulisar=await response.json()
    setLista(actulisar)
   }
 }catch{
  console.log("error al borrar")
 }
  }
  useEffect(()=>{
   eliminar()
   Apimusic()
  },[])
  console.log(lista)
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
      <div className="table-responsive mt-5 container-fluid">
        <table
          className="table table-hover table-bordered border-light text-center"
        >
          <thead className="table-primary">
            <tr>
              <th>TITULO</th>
              <th>GRUPO</th>
              <th>CATEGORIA</th>
          
              <th>CANCION</th>
              <th>OPCIONES</th>
            </tr>
          </thead>
          <tbody>
           {
            lista.map((item)=>
              <tr key={item.id}>
                  <td>{item.titulo}</td>
                  <td>{item["grupo-artista"]}</td>
                  <td>{item.genero}</td>
                 
                  <td>
                  <audio controls autoPlay>
        <source src={item.cancion} type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio></td>
                  <td>
                    <button class="btn btn-outline-danger mb-2 mb-md-0" onClick={()=>eliminar(item.id)}>Eliminar</button>
                    <button class="btn btn-outline-success" href="#" data-bs-toggle="modal" data-bs-target="#modalLogin">Modificar</button>
                  </td>
                </tr>
            )
           }
          </tbody>
        </table>
      </div>

      

      <hr />
 
   <Modaladmin></Modaladmin>
    </section>
   </>
  )
}

export default Administrador
