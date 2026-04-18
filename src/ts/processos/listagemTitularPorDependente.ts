import Processo from "../abstracoes/processo.js"
import Armazem from "../dominio/armazem.js"

export default class ListagemTitularPorDependente extends Processo {
    public processar(): void {
        let nomeDep = this.entrada.receberTexto("Digite o nome do dependente para localizar o titular:")
        let armazem = Armazem.InstanciaUnica
        let dependente = armazem.Clientes.find(c => c.Nome === nomeDep)

        if (dependente) {
            if (dependente.Titular) {
                console.log(`O titular de ${dependente.Nome} é: ${dependente.Titular.Nome}`)
            } else {
                console.log(`${dependente.Nome} é um cliente titular (não possui responsável).`)
            }
        } else {
            console.log("Dependente não encontrado.")
        }
    }
}