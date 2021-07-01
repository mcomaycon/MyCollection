function Home() {
    

    return (
        <div>
            <h1>SEJA BEM VINDO!!!!</h1>
            <Busca />
        </div>
        
    )
}

async function Busca() {
    const bd = require("./bd")
    const Clientes = await bd.BucaCli();

    return (
        <div>
            <Busca />
        </div>
        )
}

export default Home