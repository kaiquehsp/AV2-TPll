import Processo from "../abstracoes/processo.js"
import MenuPrincipal from "../menus/menuPricipal.js"
import TipoCadastroCliente from "./tipoCadastroCliente.js"
import TipoListagemClientes from "./tipoListagemClientes.js"
import EdicaoCliente from "./edicaoCliente.js"
import ExclusaoCliente from "./exclusaoCliente.js"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }

    processar(): void {
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (this.opcao) {
                case 2:
                    this.processo = new EdicaoCliente()
                    this.processo.processar()
                    break
                case 4:
                    this.processo = new ExclusaoCliente()
                    this.processo.processar()
                    break
                                case 1:
                    this.processo = new TipoCadastroCliente()
                    this.processo.processar()
                    break
                case 3:
                    this.processo = new TipoListagemClientes()
                    this.processo.processar()
                    break
                case 0:
                    this.execucao = false
                    console.log('Até logo!')
                    break
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}