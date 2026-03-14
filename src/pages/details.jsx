import { useNavigate, useSearchParams } from "react-router-dom"

const Details = () => {
    const navigate = useNavigate()
    const [params, setParams] = useSearchParams()

    const name = params.get("name")// pega direto
    const query = Object.fromEntries(params)// transforma em objeto
    
    function voltar() {
        navigate("/")
    }
    console.log(query)

    return (
        <div>
            <div>Primeira pagina criada</div>
            <h1 className="text-5xl text-red-600 border-2 border-black p-7">{name}</h1>
            <h1 className="text-5xl text-red-600 border-2 border-black p-7">{query.idade}</h1>
            <button onClick={voltar}>voltar a pagina anterior</button>
        </div>
    )
}

export default Details

// proximo passo vai ser salvar os dados em estados globais ou localStorage ao voltar para a rota principal