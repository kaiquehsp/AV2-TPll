import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";
import Cliente from "../modelos/cliente.js";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente.js";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular.js";

export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('\n--- Iniciando cadastro de Cliente Titular ---')
        let nome = this.receberApenasLetras('Qual o nome do novo cliente?')
        let nomeSocial = this.receberApenasLetras('Qual o nome social?')
        let dataNascimento = this.receberDataValida('Qual a data de nascimento (dd/mm/aaaa)?')
        
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        console.log('Cliente titular cadastrado com sucesso!')
    }
}