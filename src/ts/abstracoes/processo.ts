import Menu from "../interfaces/menu.js"
import Entrada from "../io/entrada.js"

export default abstract class Processo {
    protected opcao!: number
    protected menu!: Menu
    protected entrada = new Entrada()
    protected processo!: Processo
    protected execucao!: boolean

    public get Execucao() { return this.execucao }
    public abstract processar(): void

    protected receberApenasLetras(mensagem: string): string {
        while (true) {
            let valor = this.entrada.receberTexto(mensagem).trim();
            const regexLetras = /^[A-Za-zÀ-ÿ]{2,}(?: [A-Za-zÀ-ÿ]+)*$/;
            if (regexLetras.test(valor)) {
                return valor;
            }
            console.log("Erro: Use apenas letras (mínimo 2) e evite espaços extras.");
        }
    }
    protected receberApenasNumeros(mensagem: string, min: number = 1, max: number = 20): string {
        while (true) {
            let valor = this.entrada.receberTexto(mensagem).trim().replace(/\D/g, '');
            if (valor.length >= min && valor.length <= max) {
                return valor;
            }
            console.log(`Erro: O campo deve ter entre ${min} e ${max} números.`);
        }
    }
    protected receberAlfanumerico(mensagem: string): string {
        while (true) {
            let valor = this.entrada.receberTexto(mensagem).trim();
            if (valor.length >= 3) {
                return valor;
            }
            console.log("Erro: Entrada muito curta (mínimo 3 caracteres).");
        }
    }

    protected receberDataValida(mensagem: string): Date {
        while (true) {
            let entradaTexto = this.entrada.receberTexto(mensagem).trim();
            const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
            
            if (regexData.test(entradaTexto)) {
                let [d, m, a] = entradaTexto.split('/').map(Number);
                let data = new Date(a, m - 1, d);
                if (data.getFullYear() === a && data.getMonth() === m - 1 && data.getDate() === d) {
                    if (data <= new Date()) return data; 
                    console.log("Erro: A data não pode ser no futuro.");
                    continue;
                }
            }
            console.log("Erro: Formato inválido! Use DD/MM/AAAA.");
        }
    }

    protected receberEndereco(mensagem: string): string {
    while (true) {
        let valor = this.entrada.receberTexto(mensagem).trim();
        const regexEndereco = /^(?!\d+$)[A-Za-zÀ-ÿ0-9\s.,-]{3,}$/;

        if (regexEndereco.test(valor)) {
            return valor;
        }
        
        console.log(" Erro: Endereço inválido. O campo deve conter letras e não pode ser apenas números.");
    }

    }

    protected receberCpf(mensagem: string): string {
    while (true) {
        let valor = this.entrada.receberTexto(mensagem).trim().replace(/\D/g, '');
        if (valor.length === 11) {
            return valor;
        }
        console.log("Erro: O CPF deve conter exatamente 11 dígitos numéricos.");
    }
}
protected receberPassaporte(mensagem: string): string {
    while (true) {
        let valor = this.entrada.receberTexto(mensagem).trim().toUpperCase();
        const regexPassaporte = /^[A-Z]{2}\d{6}$/;
        if (regexPassaporte.test(valor)) {
            return valor;
        }
        console.log("Erro: Formato inválido! O passaporte deve seguir o padrão AB123456 (2 letras e 6 números).");
    }
}

protected receberRg(mensagem: string): string {
    while (true) {
        let valor = this.entrada.receberTexto(mensagem).trim().replace(/\D/g, '');
        if (valor.length >= 7 && valor.length <= 9) {
            return valor;
        }
        console.log("Erro: O RG deve conter entre 7 e 9 dígitos numéricos.");
    }
}
}