import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProdutosComponent } from './components/produtos/listar-produto/listar-produto.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Produtos', component:ListarProdutosComponent},
  {path:'Produtos/Cadastrar', component:CadastrarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
