import Processo from "../abstracoes/processo.js"
import Armazem from "../dominio/armazem.js"

export default class ListagemDependentesPorTitular extends Processo {
    public processar(): void {
        let nomeTitular = this.entrada.receberTexto("Digite o nome do titular para ver os dependentes:")
        let armazem = Armazem.InstanciaUnica
        let titular = armazem.Clientes.find(c => c.Nome === nomeTitular)

        if (titular) {
            console.log(`Titular: ${titular.Nome}`)
            if (titular.Dependentes.length > 0) {
                titular.Dependentes.forEach(dep => {
                    console.log(`- Dependente: ${dep.Nome} | Nome Social: ${dep.NomeSocial}`)
                })
            } else {
                console.log("Este titular não possui dependentes cadastrados.")
            }
        } else {
            console.log("Titular não encontrado.")
        }
    }
}