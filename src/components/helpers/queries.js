export const URL_musica=import.meta.env.VITE_API_CANCIONES


export const agregarCanciones=async(cancion)=>{
try{
   const response=await fetch(URL_musica,{
      method:"POST",
      headers:{
         "Content-Type":"application/json",
      },
      body:JSON.stringify(cancion)
   })
      if(!response.ok){
         const errorData=await response.json()
         console.log("Error en el servidor",errorData)

      }
      return response
      }catch(error){
   console.log("Error al agregar",error)
    }
}
export const borrarCancion=async(id)=>{
   try{
      const response=await fetch(URL_musica+"/"+id,{
         method:"DELETE"
      })
      return response
   }catch(error){
      console.log("Error al Borrar",error)
   }
}
export const modificarCancion=async(cancion,id)=>{

   try{
     const response=await fetch(URL_musica+"/"+id,{
      method:"PUT",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify(cancion)
     })     
     return response
   }catch(error){
      console.log("error al modificar",error)
   }
}



















const usuariosAdmin={
    pasword:"0340",
    email:"isma@gamil.com"
}
export  const logearAdmin=(usuario)=>{
 if(usuariosAdmin.pasword===usuario.pasword&&usuariosAdmin.email===usuario.email){
    sessionStorage.setItem("streaming",JSON.stringify(usuariosAdmin.email)) 
    return true
 }else{
    return false
 }
}