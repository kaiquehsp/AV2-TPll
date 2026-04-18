import Processo from "../abstracoes/processo.js"
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes.js"
import ListagemTitulares from "./listagemTitulares.js"
import ListagemDependentesPorTitular from "./listagemDependentesPorTitular.js"
import ListagemTitularPorDependente from "./listagemTitularPorDependente.js"

export default class TipoListagemClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break
            case 2:
                this.processo = new ListagemDependentesPorTitular()
                this.processo.processar()
                break
            case 3:
                this.processo = new ListagemTitularPorDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção inválida.')
        }
    }
}