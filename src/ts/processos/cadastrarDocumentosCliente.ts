import Processo from "../abstracoes/processo.js"
import MenuTipoDocumento from "../menus/menuTipoDocumento.js"
import Cliente from "../modelos/cliente.js"
import CadastroCpf from "./cadastroCpf.js" 
import CadastroRg from "./cadastroRg.js"
import CadastroPassaporte from "./cadastroPassaporte.js"

export default class CadastrarDocumentosCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true 
    }

    public processar(): void {
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastroCpf(this.cliente)
                    this.processo.processar()
                    break
                case 2:
                    this.processo = new CadastroRg(this.cliente)
                    this.processo.processar()
                    break
                case 3:
                    this.processo = new CadastroPassaporte(this.cliente)
                    this.processo.processar()
                    break
                case 0:
                    this.execucao = false 
                    console.log('Documentação finalizada.')
                    break
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}