import { ChevronRightIcon, TrashIcon } from "lucide-react"

function Test({ test, changeTask, delet }) {
    console.log(test)
    // retorna uma lista baseada no array test
    // para cada indice desse array retorna um li com o nome do indice atual percorrido
    return (
        <div className="space-y-5">
            {test.length > 0 
                ? <h1>lista de nomes</h1> 
                : null
            }
            {/* {test.length > 0 && <h1>lista de nomes</h1>} */}
            <ul className="space-y-4">{test.map((indice) => ( {/* indice atual percorrida*/},
                <li key={indice?.id} className="text-3xl text-red-600 uppercase">
                    <button onClick={() => changeTask(indice?.id)} className={` ${indice?.concluida && 'line-through'} `}>{indice?.name}</button>
                    <button className="bg-gray-900! text-purple-700">
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