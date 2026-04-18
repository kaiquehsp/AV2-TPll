import Processo from "../abstracoes/processo.js";
import { TipoDocumento } from "../enumeracoes/TipoDocumento.js";
import Cliente from "../modelos/cliente.js";
import Documento from "../modelos/documento.js";

export default class CadastroRg extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    public processar(): void {
        console.log('\n>>> Cadastro de RG')
        let numero = this.receberRg('Qual o número do RG?') 
        let dataExpedicao = this.receberDataValida('Qual a data de expedição do RG?')
        let rg = new Documento(numero, TipoDocumento.RG, dataExpedicao)
        this.cliente.Documentos.push(rg)
        
        console.log('RG cadastrado com sucesso!')
    }
}