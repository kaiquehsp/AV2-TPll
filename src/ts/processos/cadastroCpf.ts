import Processo from "../abstracoes/processo.js";
import { TipoDocumento } from "../enumeracoes/TipoDocumento.js";
import Cliente from "../modelos/cliente.js";
import Documento from "../modelos/documento.js";

export default class CadastroCpf extends Processo {
    private cliente: Cliente
    
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    public processar(): void {
    console.log('\n>>> Cadastro de CPF')
    let numero = this.receberCpf('Qual o número do CPF?') 
    let dataExpedicao = this.receberDataValida('Qual a data de expedição do CPF?')
        
        let cpf = new Documento(numero, TipoDocumento.CPF, dataExpedicao)
        
        
        this.cliente.Documentos.push(cpf)
        
        console.log('CPF cadastrado com sucesso!')
    }
}