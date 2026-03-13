import { useState } from "react"
import "./App.css"
import Test from "./components/Test"

function App () {// os hoolks são passados como parametros automaticamente para o componente!
  
  const [pass, setPass] = useState([
    {
      id: 1,
      name: "erick",
      idade: 17,
      concluida: false
    },
    {
      id: 2,
      name: "alexandre",
      idade: 300
    },
    {
      id: 3,
      name: "maximus",
      idade: 100
    },
    {
      id: 4,
      name: "leonidas",
      idade: 30
    },
    {
      id: 5,
      name: "ronald",
      idade: 18
    },

  ])

  function onTaskClick(taskId) {
    const newTask = pass.map(indiceP => {// indiceP --> indice atual percorrido
      if (indiceP.id === taskId) {
        return { ...indiceP, concluida: !indiceP.concluida }// retorna tudo que tá na tarefa
      }

      return indiceP
    })

    setPass(newTask)
    // 1- altera o valor do estado
    // 2- coloca a renderização na lista de renderizações
    // 3- renderiza o componente novamente com o valor do estado dessa renderização (passada como props para o componente)
  }

  function deletTask(idTask) {// map(retorna um novo array)
    const newTask = pass.filter(indice => indice.id !== idTask)
    // mantem na lista toda condição verdadeira

    setPass(newTask)
  }

  return (
    <div>
      <h1>teste alfa</h1>
      <Test test={pass} changeTask={onTaskClick} delet={deletTask} />
    </div>
  )
}// vira componente quando retorna um JSX

export default App