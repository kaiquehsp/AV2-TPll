import Processo from "../abstracoes/processo.js";
import Cliente from "../modelos/cliente.js";
import Endereco from "../modelos/endereco.js";

export default class CadastroEnderecoTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

public processar(): void {
    console.log('\n--- Coletando dados de endereço ---')
    
    let rua = this.receberEndereco('Qual a rua?') 
    let bairro = this.receberEndereco('Qual o bairro?')
    let cidade = this.receberApenasLetras('Qual a cidade?')
    let estado = this.receberApenasLetras('Qual o estado?')
    let pais = this.receberApenasLetras('Qual o país?')
    let codigoPostal = this.receberApenasNumeros('Qual o código postal?', 5, 9)
    let endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal)
    this.cliente.Endereco = endereco
    console.log('Endereço validado e vinculado com sucesso!')
}
}