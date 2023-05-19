import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  nomeEmpresa: string = 'HAS Company';
  nomeFunc: string = 'Joao';
  sobrenomeFunc: string = "Silva";
  idFunc: number = 1;
  salFunc: number= 2000.00;
  status: boolean = true;
  nomeCompleto: string = `Nome do funcionario: ${this.nomeFunc} ${this.sobrenomeFunc}`;
  nomeProduto: string = "Curso de Angular";
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = false;
  foto:string = 'assets/img/crud.png'
  dataValidade= '2021-12-31'
  /*
  nomeEmpresa: string ='HAS company';
  nomeFunc: string = 'joao';
  sobrenomeFunc: string = 'Silva';
  IdFunc: number = 1;
  salFunc: number = 200.00;
  status: boolean = true;
  nomeCompleto: string = `Nome do funcionario:' ${this.nomeFunc} ${this.sobrenomeFunc} `;
*/
  constructor() {
    //this.nomeFunc= 'joao'
    //this.nomeCompleto = this.nomeFunc + ' ' + this.sobrenomeFunc
  /* console.log(this.nomeCompleto);
    console.log(`Nome da empresa`,this.nomeEmpresa);
    console.log(`Salario`,this.salFunc);
    console.log(`Id`,this.IdFunc, 'status: ',this.status);
    console.log(`Status`,this.status);
    var variavel1;
    var variavel2;
    const var3 = 9;
*/
/*
//basta trocar para var que ira funcionar
let variavel=0;
let variavel=10;
console.log('variavel', variavel);
function funcao(){
  let outra_variavel = 20;
  let outra_variavel = 30;
  console.log('outra variavel:',outra_variavel);
}
funcao();
*/
/*
var a = 10;
let b = 20;
function bar() {
  var a = 30;
  let b = 40;
  if(true) {
    var a = 50;
    let b = 60;
    console.log('variavel a dentro do if', a);
    console.log('variavel b dentro do if', b);
  }
  console.log(`variavel a dentro da funcao a`, a);
  console.log(`variavel b dentro da funcao b`, b);
}
bar();
console.log('variavel a fora da funcao a', a);
console.log('variavel b fora da funcao b', b);
*/
/*
let a = 1;
function bar() {
  console.log('variavel a: ', a);
  let b = 2;
  if(true) {
    let c = 3;
    let a = 4;
    console.log('variavel a dentro do if  ', a)
    console.log('variavel b dentro do if  ', b);
    console.log('variavel c dentro do if  ', c);
  }
  console.log('variavel a fora do if', a);
  console.log('variavel b fora do if', b);
  //console.log(c);
}
bar();
*/
/*
var a = 5;
var b = 10;
if(a = 5){
  let a = 4;
  var b = 1;
  console.log('variavel a dentro do if:  ', a);
  console.log('variavel b dentro do if: ', b);
}
console.log('variavel a fora do if:', a);
console.log('variavel b fora do if:', b);

nome: String = "Eliane";
logo: String = 'logo_horacio.png';
*/
   }



}
