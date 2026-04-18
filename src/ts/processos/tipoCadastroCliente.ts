import Processo from "../abstracoes/processo.js"
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente.js"
import CadastroClienteTitular from "./cadastroClienteTitular.js"
import CadastroClienteDependente from "./cadastroClienteDependente.js"

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção inválida.')
        }
    }
}