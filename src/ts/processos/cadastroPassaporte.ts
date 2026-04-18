import Processo from "../abstracoes/processo.js";
import { TipoDocumento } from "../enumeracoes/TipoDocumento.js";
import Cliente from "../modelos/cliente.js";
import Documento from "../modelos/documento.js";

export default class CadastroPassaporte extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    public processar(): void {
        console.log('\n>>> Cadastro de Passaporte')
        let numero = this.receberPassaporte('Qual o número do passaporte?') 
        let dataExpedicao = this.receberDataValida('Qual a data de emissão?')
        let passaporte = new Documento(numero, TipoDocumento.Passaporte, dataExpedicao)
        this.cliente.Documentos.push(passaporte)
        
        console.log('Passaporte cadastrado com sucesso!')
    }
}