
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