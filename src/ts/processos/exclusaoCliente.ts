import Processo from "../abstracoes/processo.js"
import Armazem from "../dominio/armazem.js"

export default class ExclusaoCliente extends Processo {
    public processar(): void {
        console.log("\n--- Exclusão de Cliente ---")
        let nome = this.entrada.receberTexto("Digite o nome do cliente que deseja excluir:")
        let armazem = Armazem.InstanciaUnica
        
        let clienteExcluir = armazem.Clientes.find(c => c.Nome === nome)

        if (clienteExcluir) {
            if (clienteExcluir.Dependentes.length > 0) {
                console.log(`Removendo dependentes vinculados a ${clienteExcluir.Nome}...`)
                clienteExcluir.Dependentes.forEach(dep => {
                    let indexDep = armazem.Clientes.indexOf(dep)
                    if (indexDep !== -1) armazem.Clientes.splice(indexDep, 1)
                })
            }
            if (clienteExcluir.Titular) {
                let titular = clienteExcluir.Titular
                let indexNaListaDoTitular = titular.Dependentes.indexOf(clienteExcluir)
                if (indexNaListaDoTitular !== -1) {
                    titular.Dependentes.splice(indexNaListaDoTitular, 1)
                }
            }
            let index = armazem.Clientes.indexOf(clienteExcluir)
            armazem.Clientes.splice(index, 1)
            
            console.log("Cliente e seus vínculos foram removidos com sucesso.")
        } else {
            console.log("Cliente não encontrado.")
        }
    }
}