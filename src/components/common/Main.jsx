
import Index from "../Index"
import { ModalLogin } from "../modales/ModalLogin"
const Main = ({setLogeado}) => {
  return (
 <main>
<Index></Index>
<ModalLogin setLogeado={setLogeado}></ModalLogin>
 </main>
  )
}

export default Main
