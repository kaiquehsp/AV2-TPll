import Processo from "../abstracoes/processo.js"
import Armazem from "../dominio/armazem.js"

export default class EdicaoCliente extends Processo {
    public processar(): void {
        console.log("\n--- Edição de Cliente ---")
        let nomeBusca = this.entrada.receberTexto("Digite o nome do cliente que deseja editar:")
        let armazem = Armazem.InstanciaUnica
        let cliente = armazem.Clientes.find(c => c.Nome === nomeBusca)

        if (cliente) {
            console.log(`Editando: ${cliente.Nome}`)
            let novoNome = this.entrada.receberTexto("Novo nome (deixe em branco para manter):")
            let novoNomeSocial = this.entrada.receberTexto("Novo nome social (deixe em branco para manter):")

            if (novoNome) cliente.Nome = novoNome
            if (novoNomeSocial) cliente.NomeSocial = novoNomeSocial

            console.log("Dados atualizados com sucesso.")
        } else {
            console.log("Cliente não encontrado.")
        }
    }
}