
import { useEffect, useState } from "react"
import "./css/index.css"
import { URL_musica } from "./helpers/queries"


const Index = () => {
const[card,setCard]=useState([])

const Api=async()=>{
  try{
  const response=await(fetch(URL_musica))
  
  if(response.status===200){
    const data=await response.json()
    setCard(data)

  }
  }catch{
    console.error("Error en la solicitud")
  }

}
useEffect(()=>{
 Api()
}, [])
console.log(card)
  return (
   <>
    <section class="row">
        <article class="col-md-1">
          <div
            id="cajaBotones"
            class="text-center justify-content-center mt-3 d-flex justify-content-evenly flex-md-column align-items-md-start align-items-md-center"
          >
            <div><i class="bi bi-compass nav-item fs-1"></i></div>
            <div><i class="bi bi-play-btn nav-item fs-1"></i></div>
            <div>
              <i class="bi bi-file-earmark-music-fill nav-item fs-1"></i>
            </div>
          </div>
        </article>
        <article id="losMasEscuchados" class="container col-md-11">
          <p class="btn btn-outline-success my-3 my-md-5 mx-md-5">
            LOS MAS ESCUCHADOS
          </p>
          <div id="carouselCanciones" class="carousel slide pe-3">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselCanciones"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselCanciones"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselCanciones"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="./img/artistas y albunes/Sex-Love-Cover_preview.jpg"
                  class="d-block w-100 bannerscarousel"
                  alt="portada de album tiago pzk"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./img/artistas y albunes/khea.jpg"
                  class="d-block w-100 bannerscarousel"
                  alt="portada album khea"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./img/artistas y albunes/lali_lali-portada.jpg"
                  class="d-block w-100 bannerscarousel"
                  alt="portada album lali"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselCanciones"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselCanciones"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </article>
      </section>
      
       
      <div class="container mt-5">
        <h1 className="title-canciones mb-4" >Canciones Para Ti:</h1>
       
         <div className="contenedor-musica container">
            {
            card.map((item)=>
              <div className="card" key={item.id}>
                     <iframe  
                     className="inframe" src={item.cancion} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <div className="info-card">
                  <p className="card-titulo">  {item.titulo}</p>
                  <p className="card-Grupo"> {item.artistaGrupo}</p>
                   
                </div>
              </div>
            )
          }

         </div>
      
      </div>
   </>
  )
}

export default Index
