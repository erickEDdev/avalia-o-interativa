import { ChevronRightIcon, TrashIcon } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Test({ test, changeTask, delet, addTask }) {
    console.log(test)
    const [name, setName] = useState("")    
    const [idade, setIdade] = useState("")
    const navigate = useNavigate()

    function enviar(name, idade) {
        navigate(`/details?name=${name}&idade=${idade}`)
    }
    
    // retorna uma lista baseada no array test
    // para cada indice desse array retorna um li com o nome do indice atual percorrido
    return (// sempre que quiser usar javaScript dentro do return usa chaves --> {}
        <div className="space-y-5">
            <div className="flex flex-col gap-[10px_0px] w-50">
                <input 
                    type="text"
                    placeholder="digite um nome" 
                    className="input-add" value={name} 
                    onChange={(event) => setName(event.target.value)}
                ></input>
                <input 
                    type="number"
                    placeholder="digite uma idade" 
                    className="input-add" 
                    value={idade} 
                    onChange={(infosDoEvento) => setIdade(infosDoEvento.target.value)}
                ></input>
                <button className="bg-yellow-500! text-white! font-medium uppercase" onClick={() => {
                    if (!name || !idade) {
                        return window.alert("Prencha todos os campos")
                    }
                    addTask(name, idade)
                    setName("")// se o "name" não estivesse definido no "value"
                    setIdade("")
                }}>adicionar</button>
            </div>
            {test.length > 0 
                ? <h1>lista de nomes</h1> 
                : null
            }
            {/* {test.length > 0 && <h1>lista de nomes</h1>} */}
            <ul className="space-y-4">{test.map((indice) => ( {/* indice atual percorrida*/},
                <li key={indice?.id} className="text-3xl text-red-600 uppercase">
                    <button onClick={() => changeTask(indice?.id)} className={` ${indice?.concluida && 'line-through'} `}>{indice?.name}</button>
                    <button className="bg-gray-900! text-purple-700" onClick={() => enviar(indice?.name, indice?.idade)}>
                        <ChevronRightIcon size={35} strokeWidth={4} />
                    </button>
                    <button onClick={() => delet(indice?.id)}> {/* passamos o 'id do indice atual percorrido' */}
                        <TrashIcon size={35} strokeWidth={3} />
                    </button>
                </li>
            ))}</ul>
            {/* key --> vai ser o id do indice atual percorrido */}
        </div>
    )
}

export default Test