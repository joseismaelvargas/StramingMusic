import React, { useEffect } from 'react'
import "../css/admin.css"
import { Modaladminagregar } from '../modales/Modaladmin.jsx'
import { Modalmodificar } from '../modales/Modalmodificar.jsx'
import { URL_musica } from '../helpers/queries.js'
import { borrarCancion } from '../helpers/queries.js'
import { useState} from 'react'

export const Administrador = () => {
  const[lista,setLista]=useState([])|| []
  const [canciondata,setCanciondata]=useState([])
  const[id,setid]=useState()
  const Apimusic=async()=>{
    try{
 const response=await(fetch (URL_musica))
     
    if(response.status===200){
      const datos=await response.json()
     console.log(datos)

     setLista(datos);  
    }

    }catch{
     console.log("Error en la solicitud")
     setLista([]);

    }
   

  }
  const eliminar=async(id)=>{
      try{
         const response=await borrarCancion(id)
         if(response.status===200){
              const data=await response.json()
              setLista(data)
         }
      }catch{
        console.error("Nose pudo borrar la musica")
      }
  }
  const modificar=(id)=>{
    const data=lista.find((item)=>item.id===id)
    setCanciondata(data)
    setid(id) 
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
          className="table table-hover table-bordered border-light  text-center"
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
                  <td>{item.artistaGrupo}</td>
                  <td>{item.genero}</td>
                 
                  <td>
                  <iframe width="300" height="200" src={item.cancion} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </td>
                  <td>
                    <button class="btn btn-outline-danger mb-2 mb-md-0" onClick={()=>eliminar(item.id)}>Eliminar</button>
                    <button class="btn btn-outline-success"  onClick={()=>modificar(item.id)}  href="#" data-bs-toggle="modal" data-bs-target="#modalLogin2">Modificar</button>
                  </td>
                </tr>
            )
           }
          </tbody>
        </table>
      </div>

      

      <hr />
 
   <Modaladminagregar setLista={setLista}></Modaladminagregar>
   <Modalmodificar setLista={setLista} canciondata={canciondata} id={id}></Modalmodificar>
    </section>
   </>
  )
}

export default Administrador
