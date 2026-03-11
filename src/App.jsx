import { useState } from "react"
import "./App.css"

function App () {// os hoolks são passados como parametros automaticamente para o componente!
  const [msg, setMsg] = useState("mensagem inicial")

  return (
    <div>
      <h1 className="titulo">{msg}</h1>
      <button onClick={() => setMsg("nova mensagem")} className="t2">mudar mensagem</button>
    </div>
  )
}// vira componente quanado retorna um JSX

export default App