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
      idade: 300,
      concluida: false
    },
    {
      id: 3,
      name: "maximus",
      idade: 100,
      concluida: false
    },
    {
      id: 4,
      name: "leonidas",
      idade: 30,
      concluida: false
    },
    {
      id: 5,
      name: "ronald",
      idade: 18,
      concluida: false
    },

  ])

  function onTaskClick(taskId) {// map(retorna um novo array)
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

  function deletTask(idTask) {
    const newTask = pass.filter(indice => indice.id !== idTask)
    // mantem na lista toda condição verdadeira

    setPass(newTask)
  }

  function onAddTask(name, idade) {
    const newTask = {
      id: pass.length + 1,
      name,// nome da propriedade é o mesmo do parametro
      idade: idade,
      concluida: false
    }
    setPass([...pass, newTask])// retorna tudo que estava na tarefa mais + uma tarefa
  }

  return (
    <div>
      <h1>teste alfa</h1>
      <Test test={pass} changeTask={onTaskClick} delet={deletTask} addTask={onAddTask} />
    </div>
  )
}// vira componente quando retorna um JSX

export default App