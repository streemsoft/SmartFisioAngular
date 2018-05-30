export class Paciente{
    key:string;
    //dados
    sexo:string;
    civil:string;
    profissao:string;
    //endereco
    rua:string;
    bairro:string;
    numero:string;
    cidade:string;
    cep:string;
    //contato
    telefone:string;
    email:string;
    //medico
    medico:string;
    telmed:string;

    constructor(){
        this.key = '';
        this.medico = '';
        this.numero = '';
        this.profissao = '';
        this.rua = '';
        this.sexo = '';
        this.telefone = '';
        this.telmed = '';
        this.bairro = '';
        this.cep = '';
        this.cidade = '';
        this.civil = '';
        this.email = '';
     }

}