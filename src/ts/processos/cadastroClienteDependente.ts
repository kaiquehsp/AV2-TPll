import Processo from "../abstracoes/processo.js"
import Armazem from "../dominio/armazem.js"
import Cliente from "../modelos/cliente.js"

export default class CadastroClienteDependente extends Processo {
    public processar(): void {
        console.log('\n--- Cadastro de Dependente ---')
        let nomeTitular = this.entrada.receberTexto("Digite o nome exato do titular responsável:")
        let armazem = Armazem.InstanciaUnica
        let titular = armazem.Clientes.find(c => c.Nome === nomeTitular)

        if (titular) {
            let nome = this.receberApenasLetras("Qual o nome do dependente?")
            let nomeSocial = this.receberApenasLetras("Qual o nome social do dependente?")
            let dataNascimento = this.receberDataValida("Qual a data de nascimento (dd/mm/aaaa)?")
            let dependente = new Cliente(nome, nomeSocial, dataNascimento)
            dependente.Titular = titular
            titular.Dependentes.push(dependente)
            armazem.Clientes.push(dependente)
            
            console.log(`Dependente "${nome}" vinculado a "${titular.Nome}" com sucesso!`)
        } else {
            console.log("Titular não encontrado!")
        }
    }
}