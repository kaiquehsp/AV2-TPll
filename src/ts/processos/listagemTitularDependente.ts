import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"

export default class ListagemTitularDependente extends Processo {
    public processar(): void {
        let nomeDep = this.entrada.receberTexto("Digite o nome do dependente para saber o titular:")
        let armazem = Armazem.InstanciaUnica
        let dependente = armazem.Clientes.find(c => c.Nome === nomeDep)

        if (dependente && dependente.Titular) {
            console.log(`O titular de ${dependente.Nome} é: ${dependente.Titular.Nome}`)
        } else {
            console.log("Dependente não encontrado ou não possui titular vinculado.")
        }
    }
}